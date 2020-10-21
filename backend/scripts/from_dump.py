#!/usr/bin/env python3
import glob
import os
import sys

from lxml import etree

from dicts.models import DictEntry, ExampleGroup, Restriction, TranslationGroup
from lemmas.models import Lemma
from mongoengine.errors import ValidationError
from stems.models import Stem
from terms.models import Concept, Term
from termwikiimporter import bot

LEMMAS = {}
STEMS = {}
LANGS = {
    'en': 'eng',
    'fi': 'fin',
    'nb': 'nob',
    'nn': 'nno',
    'sv': 'swe',
    'lat': 'lat',
    'sma': 'sma',
    'se': 'sme',
    'smj': 'smj',
    'smn': 'smn',
    'sms': 'sms',
}


def make_lemma(lang, expression):
    lemma = Lemma(lemma=expression['expression'],
                  pos=expression['pos'],
                  language=LANGS[lang],
                  dialect=None,
                  country=None)
    lemma.save()

    return lemma


def make_terms(lang, concept):
    for expression in same_lang_sanctioned_expressions(
            lang, concept.related_expressions):
        lemma_key = (expression['expression'], expression['pos'], LANGS[lang])
        if not LEMMAS.get(lemma_key):
            LEMMAS[lemma_key] = make_lemma(lang, expression)

        term = Term(status=expression.get('status'),
                    sanctioned=expression.get('sanctioned', False),
                    note=expression.get('note'),
                    source=expression.get('source'),
                    expression=LEMMAS.get(lemma_key))
        yield term


def get_definition(lang, concept):
    for concept_info in concept.data['concept_infos']:
        if lang == concept_info['language']:
            return concept_info.get('definition')


def get_explanation(lang, concept):
    for concept_info in concept.data['concept_infos']:
        if lang == concept_info['language']:
            return concept_info.get('explanation')


def same_lang_sanctioned_expressions(lang, expressions):
    return [
        expression for expression in expressions if
        expression['language'] == lang and expression['sanctioned'] == 'True'
    ]


def get_valid_langs(concept):
    return {
        lang
        for lang in concept.languages()
        if same_lang_sanctioned_expressions(lang, concept.related_expressions)
    }


def make_m():
    print('Importing TermWiki content')
    dumphandler = bot.DumpHandler()
    pairs = {}
    for x, (title, concept) in enumerate(dumphandler.concepts):
        # print(x, title)
        if concept.has_sanctioned_sami():
            valid_langs = get_valid_langs(concept)
            extract_term_stems(concept, valid_langs)
            for lang in valid_langs:
                c = Concept(
                    name=f'{title}',
                    definition=get_definition(lang, concept),
                    explanation=get_explanation(lang, concept),
                    terms=make_terms(lang, concept),
                    collections=[
                        collection for collection in concept.collections
                    ],
                )
                c.save()


def extract_term_stems(concept, valid_langs):
    for lang in valid_langs:
        for expression in same_lang_sanctioned_expressions(
                lang, concept.related_expressions):
            if not STEMS.get(expression['expression']):
                STEMS[expression['expression']] = {}
                STEMS[expression['expression']]['fromlangs'] = set()
                STEMS[expression['expression']]['tolangs'] = set()
                STEMS[expression['expression']]['dicts'] = set()

            STEMS[expression['expression']]['dicts'].add('termwiki')
            STEMS[expression['expression']]['fromlangs'].add(LANGS[lang])
            for lang2 in valid_langs:
                if lang2 != lang:
                    STEMS[expression['expression']]['tolangs'].add(
                        LANGS[lang2])


# Dict import below here


def normalise_lemma(lemma: str) -> str:
    for offending, replacement in [('\n', ' '), ('  ', ' ')]:
        while offending in lemma:
            lemma = lemma.replace(offending, replacement)

    return lemma


def l_or_t2stem(element, src):
    lemma = Lemma(lemma=normalise_lemma(element.text),
              language=src,
              pos=element.get('pos'),
              dialect=element.get('dialect'),
              country=element.get('country'))
    lemma.save()

    return lemma


def make_dict_lemma(element, lang):
    lemma_key = (normalise_lemma(element.text), element.get('pos'), lang)
    if not LEMMAS.get(lemma_key):
        LEMMAS[lemma_key] = l_or_t2stem(element, lang)

    return LEMMAS[lemma_key]


def make_lemmas(translations, target):
    return [
        make_dict_lemma(translation, target) for translation in translations
        if translation.text is not None
    ]


def make_restriction(translation_group):
    restriction_element = translation_group.find('./re')
    if restriction_element is not None:
        return Restriction(restriction=restriction_element.text,
                           attributes=str(restriction_element.attrib))

    t_element = translation_group.find('./t[@reg]')
    if t_element is not None and t_element.get('reg').lower() != 'x':
        return Restriction(restriction=t_element.get('reg'), attributes='')


def make_example(example):
    return ExampleGroup(example=example.find('./x').text,
                        translation=example.find('./xt').text)


def make_examples(examples):
    return [make_example(example) for example in examples]


def make_translation_group(translation_group, target):
    return TranslationGroup(
        translationLemmas=make_lemmas(translation_group.xpath('./t'), target),
        restriction=make_restriction(translation_group),
        exampleGroups=make_examples(translation_group.xpath('./xg')))


def make_translation_groups(translation_groups, target):
    return [
        make_translation_group(translation_group, target)
        for translation_group in translation_groups if translation_group.get(
            '{http://www.w3.org/XML/1998/namespace}lang') == target
    ]


def make_entries(dictxml, dictname, src, target):
    for entry in dictxml.iter('e'):
        if entry.get('src') != 'gg':
            d = DictEntry(dictName=f'{dictname}{src}{target}',
                          srcLang=src,
                          targetLang=target,
                          lookupLemmas=make_lemmas(entry.xpath('.//l'), src),
                          translationGroups=make_translation_groups(
                              entry.xpath('.//tg'), target))

            for lookupLemma in d.lookupLemmas:
                if not STEMS.get(lookupLemma.lemma):
                    STEMS[lookupLemma.lemma] = {}
                    STEMS[lookupLemma.lemma]['fromlangs'] = set()
                    STEMS[lookupLemma.lemma]['tolangs'] = set()
                    STEMS[lookupLemma.lemma]['dicts'] = set()

                STEMS[lookupLemma.lemma]['dicts'].add(
                    f'{dictname}{src}{target}')
                STEMS[lookupLemma.lemma]['fromlangs'].add(src)
                STEMS[lookupLemma.lemma]['tolangs'].add(target)

            d.save()


def import_dict(pair):
    print(f'Import Giellatekno {pair} dictionary')
    dict_root = os.path.join(os.getenv('GTHOME'), 'words/dicts', pair, 'src')
    for xml_file in glob.glob(dict_root + '/*.xml'):
        if not xml_file.endswith('meta.xml') and 'Der_' not in xml_file:
            # TODO: handle Der_ files
            try:
                print(f'\t{os.path.basename(xml_file)}')
                parser = etree.XMLParser(remove_comments=True,
                                         dtd_validation=True)
                dictxml = etree.parse(xml_file, parser=parser)
                make_entries(dictxml,
                             dictname='gt',
                             src=pair[:3],
                             target=pair[3:])
            except etree.XMLSyntaxError as error:
                print('Syntax error in {} '
                      'with the following error:\n{}\n'.format(
                          xml_file, error),
                      file=sys.stderr)


def make_dicts():
    for pair in [
            'smenob', 'nobsme', 'nobsma', 'smanob', 'smefin', 'finsme',
            'smesmn', 'smnsme', 'finsmn', 'smnfin'
    ]:
        import_dict(pair)


def import_sammalahti():
    print(f'Pekka Sammallahtis sme-fin dictionary')
    xml_file = os.path.join(os.getenv('HOME'),
                            'repos/sammallahti/sammallahti.xml')
    try:
        print(f'\t{os.path.basename(xml_file)}')
        parser = etree.XMLParser(remove_comments=True)
        dictxml = etree.parse(xml_file, parser=parser)
        make_entries(dictxml, dictname='sammallahti', src='sme', target='fin')
    except etree.XMLSyntaxError as error:
        print('Syntax error in {} '
              'with the following error:\n{}\n'.format(xml_file, error),
              file=sys.stderr)


def make_stems():
    c = 0
    c2 = 0
    for stem in STEMS:
        try:
            s = Stem(stem=stem,
                     srclangs=list(STEMS[stem]['fromlangs']),
                     targetlangs=list(STEMS[stem]['tolangs']),
                     dicts=list(STEMS[stem]['dicts']))
            s.save()
        except ValidationError as error:
            print(error)
            print(stem)

        c2 += 1
    #     print(stem)
    #     if len(STEMS[stem]['fromlangs']) > 1:
    #         c += 1
    #     print('\t', STEMS[stem]['fromlangs'])
    #     print('\t', STEMS[stem]['tolangs'])
    # print('more than one in tolangs:', c, c2)


def run():
    make_dicts()
    make_m()
    import_sammalahti()
    make_stems()
