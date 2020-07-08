#!/usr/bin/env python3
import glob
import os
import sys

from lxml import etree

from lemmas.models import Lemma
from terms.models import Concept, MultiLingualConcept, Term
from dicts.models import DictEntry, MeaningGroup, TranslationGroup
from termwikiimporter import bot

LEMMAS = {}
langs = {
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
    l = Lemma(
        lemma=expression['expression'],
        pos=expression['pos'],
        language=langs[lang])
    l.save()

    return l


def make_terms(lang, concept):
    for expression in same_lang_sanctioned_expressions(
            lang, concept.related_expressions):
        lemma_key = (expression['expression'], expression['pos'], langs[lang])
        if not LEMMAS.get(lemma_key):
            LEMMAS[lemma_key] = make_lemma(lang, expression)

        term = Term(
            status=expression.get('status'),
            sanctioned=expression.get('sanctioned', False),
            note=expression.get('note'),
            source=expression.get('source'),
            expression=LEMMAS.get(lemma_key))
        yield term


def make_concept(lang, concept):
    def make_c(terms):
        for concept_info in concept.data['concept_infos']:
            if lang == concept_info['language']:
                c = Concept(
                    language=langs[lang],
                    definition=concept_info.get('definition'),
                    explanation=concept_info.get('explanation'),
                    terms=terms)
                return c
        else:
            c = Concept(language=langs[lang], terms=terms)
            return c

    c = make_c([term for term in make_terms(lang, concept)])

    return c


def same_lang_sanctioned_expressions(lang, expressions):
    return [
        expression for expression in expressions if
        expression['language'] == lang and expression['sanctioned'] == 'True'
    ]


def make_m():
    dumphandler = bot.DumpHandler()

    for x, (title, concept) in enumerate(dumphandler.concepts):
        # if x > 100:
        #     break
        if concept.has_sanctioned_sami():
            print(f'Adding {x} {title}')
            m = MultiLingualConcept(name=f'{title}', concepts=make_c(concept))
            m.save()


def make_c(concept):
    return [make_concept(lang, concept) for lang in concept.languages()]


def normalise_lemma(lemma: str) -> str:
    for offending, replacement in [('\n', ' '), ('  ', ' ')]:
        while offending in lemma:
            lemma = lemma.replace(offending, replacement)

    return lemma


def l_or_t2stem(element, src):
    print(element.tag, element.text, element.get('pos'), src)
    l = Lemma(
        lemma=normalise_lemma(element.text), language=src, pos=element.get('pos'))
    l.save()

    return l


def make_dict_lemma(element, lang):
    lemma_key = (normalise_lemma(element.text), element.get('pos'), lang)
    if not LEMMAS.get(lemma_key):
        LEMMAS[lemma_key] = l_or_t2stem(element, lang)

    return LEMMAS[lemma_key]


def make_translation_lemmas(translations, target):
    return [
        make_dict_lemma(translation, target)
        for translation in translations if translation.text is not None
    ]


def make_translation_group(translation_group, target):
    return TranslationGroup(
        translationLemmas=make_translation_lemmas(
            translation_group.xpath('.//t'), target))


def make_translation_groups(translation_groups, target):
    return [
        make_translation_group(translation_group, target)
        for translation_group in translation_groups if translation_group.get(
            '{http://www.w3.org/XML/1998/namespace}lang') == target
    ]


def make_meaning_group(meaning_group, target):
    return MeaningGroup(
        translationsGroups=(
            make_translation_groups(meaning_group.xpath('.//tg'), target)))


def make_meaning_groups(meaning_groups, target):
    return [
        make_meaning_group(meaning_group, target)
        for meaning_group in meaning_groups
    ]


def make_entries(dictxml, src, target):
    for entry in dictxml.iter('e'):
        d = DictEntry(
            srcLang=src,
            targetLang=target,
            lookupLemma=make_dict_lemma(entry.find('.//l'), src),
            meaningGroups=make_meaning_groups(entry.xpath('.//mg'), target))
        d.save()


def import_dict(pair):
    dict_root = os.path.join(os.getenv('GTHOME'), 'words/dicts', pair, 'src')
    for xml_file in glob.glob(dict_root + '/*.xml'):
        if not xml_file.endswith('meta.xml') and 'Der_' not in xml_file:
            # TODO: handle Der_ files
            try:
                parser = etree.XMLParser(
                    remove_comments=True, dtd_validation=True)
                dictxml = etree.parse(xml_file, parser=parser)
                make_entries(dictxml, src=pair[:3], target=pair[3:])
            except etree.XMLSyntaxError as error:
                print(
                    'Syntax error in {} '
                    'with the following error:\n{}\n'.format(xml_file, error),
                    file=sys.stderr)


def make_dicts():
    for pair in [
            'smenob', 'nobsme', 'nobsma', 'smanob', 'smefin', 'finsme',
            # 'smesmn', 'smnsme'
    ]:
        import_dict(pair)


def run():
    # make_m()
    make_dicts()
