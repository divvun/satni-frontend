from mongoengine.queryset.visitor import Q
from stems.models import Stem


def run():
    print('filtering on arpa')
    for s in Stem.objects.filter(stem__istartswith='arpa'):
        print(s.stem, s.srclangs, s.targetlangs)

    print('\nfiltering on arpa and check if targetlangs contain smn')
    for s in Stem.objects.filter(stem__istartswith='arpa').filter(
            targetlangs__contains='smn'):
        print(s.stem, s.srclangs, s.targetlangs)

    wanted_langs = ['smn', 'fin']
    target_queries = [
        Q(targetlangs__contains=wanted_lang) for wanted_lang in wanted_langs
    ]
    target_filter = target_queries.pop()
    for item in target_queries:
        target_filter |= item

    sources_queries = [
        Q(srclangs__contains=wanted_lang) for wanted_lang in wanted_langs
    ]
    source_filter = sources_queries.pop()
    for item in sources_queries:
        source_filter |= item

    print(f'\nis targetlangs in {wanted_langs}')
    for s in Stem.objects(
            Q(stem__istartswith='arpa') & source_filter & target_filter):
        print(s.stem, s.srclangs, s.targetlangs)
