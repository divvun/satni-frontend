#!/usr/bin/env python3

from termwikiimporter import bot
from lemmas.models import Lemma
from terms.models import Concept, MultiLingualConcept

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
            if concept_info.get('definition'):
                return Concept.objects.create(language=langs[lang], definition=concept_info.get('definition'), mconcept=m)
            else:
                return Concept.objects.create(language=langs[lang], mconcept=m)
    else:
        return Concept.objects.create(language=langs[lang], mconcept=m)

dumphandler = bot.DumpHandler()
titles = set()

for title, concept in dumphandler.concepts:
    langset = {expression['language'] for expression in concept.related_expressions}
    if title not in titles and concept.has_sanctioned_sami() and len(langset) > 1:
        titles.add(title)
        m = MultiLingualConcept.objects.create(name=f'{title}')

        for lang in langset:
            c = make_concept(lang, concept.data['concept_infos'], m)
            expressions = [expression for expression in concept.related_expressions if expression['language'] == lang]
            for expression in expressions:
                l, _ = Lemma.objects.get_or_create(lemma=expression['expression'], partOfSpeech=expression['pos'], language=langs[lang])
                c.terms.add(l)
                m.lemma.add(l)
