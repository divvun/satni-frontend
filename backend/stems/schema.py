import graphene

from graphene_mongo.fields import MongoengineConnectionField
from mongoengine.queryset.visitor import Q

from .models import Stem
from .types import StemType


class Query(graphene.ObjectType):
    stem_list = MongoengineConnectionField(
        StemType,
        search=graphene.String(),
        wanted=graphene.List(graphene.String),
        wanted_dicts=graphene.List(graphene.String))

    def resolve_stem_list(self, info, **kwargs):
        print('stem kwargs:', kwargs)
        wanted_dicts = kwargs['wanted_dicts']
        filter = Q(stem__istartswith=kwargs['search'])
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

            filter &= (source_filter & target_filter)

        if wanted_dicts:
            dict_filters = [
                Q(dicts=wanted_dict)
                for wanted_dict in wanted_dicts
                ]
            dict_filter = dict_filters.pop()
            for dict_filter in dict_filters:
                dict_filter |= dict_filter
            filter &= (dict_filter)

        return Stem.objects(filter).order_by('stem')
