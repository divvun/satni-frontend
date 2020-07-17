import graphene

from graphene_mongo.fields import MongoengineConnectionField
from mongoengine.queryset.visitor import Q

from .models import Stem
from .types import StemType


class Query(graphene.ObjectType):
    stem_list = MongoengineConnectionField(
        StemType,
        search=graphene.String(),
        wanted=graphene.List(graphene.String))

    def resolve_stem_list(self, info, **kwargs):
        print('stem kwargs:', kwargs)

        if kwargs['wanted']:
            wanted_langs = kwargs['wanted']
            target_queries = [
                Q(targetlangs__contains=wanted_lang)
                for wanted_lang in wanted_langs
            ]
            target_filter = target_queries.pop()
            for item in target_queries:
                target_filter |= item

            sources_queries = [
                Q(srclangs__contains=wanted_lang)
                for wanted_lang in wanted_langs
            ]
            source_filter = sources_queries.pop()
            for item in sources_queries:
                source_filter |= item
            return Stem.objects(Q(stem__istartswith=kwargs['search']) &
                                source_filter & target_filter).order_by('stem')

        return Stem.objects(
            stem__istartswith=kwargs['search']).order_by('stem')
