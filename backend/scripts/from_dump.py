#!/usr/bin/env python3

from lemmas.models import Lemma
from terms.models import Concept, MultiLingualConcept, Term
from termwikiimporter import bot

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
    for expression in same_lang_expressions(lang, concept.related_expressions):
        term = Term(
            status=expression.get('status'),
            sanctioned=expression.get('sanctioned', False),
            note=expression.get('note'),
            source=expression.get('source'),
            expression=make_lemma(lang, expression))
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


def same_lang_expressions(lang, expressions):
    return [
        expression for expression in expressions
        if expression['language'] == lang
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


def run():
    make_m()
