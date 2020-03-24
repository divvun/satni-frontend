#!/usr/bin/env python3

from termwikiimporter import bot
from lemmas.models import Lemma
from terms.models import Concept, MultiLingualConcept, Term

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


def make_concept(lang, concept_infos, m):
    for concept_info in concept_infos:
        if lang == concept_info['language']:
                return Concept.objects.create(
                    language=langs[lang],
                    definition=concept_info.get('definition'),
                    explanation=concept_info.get('explanation'),
                    multilingualconcept=m
                )
    else:
        return Concept.objects.create(
            language=langs[lang],
            multilingualconcept=m
        )


def same_lang_expressions(lang, expressions):
    return [
        expression for expression in expressions
        if expression['language'] == lang
    ]


def run():
    dumphandler = bot.DumpHandler()
    titles = set()

    x = 0
    for title, concept in dumphandler.concepts:
        print(f'Adding {title}')
        if x > 100:
            break
        x += 1
        if title not in titles:
            titles.add(title)
            m, _ = MultiLingualConcept.objects.get_or_create(name=f'{title}')

            for lang in concept.languages():
                c = make_concept(lang, concept.data['concept_infos'], m)
                c.save()
                for expression in same_lang_expressions(lang, concept.related_expressions):
                    l, _ = Lemma.objects.get_or_create(
                        lemma=expression['expression'],
                        pos=expression['pos'],
                        language=langs[lang]
                    )
                    term = Term.objects.create(
                        status=expression.get('status'),
                        sanctioned=expression.get('sanctioned', False),
                        note=expression.get('note'),
                        source=expression.get('source'),
                        concept=c,
                        lemma=l
                    )
                    l.multilingualconcept.add(m)
