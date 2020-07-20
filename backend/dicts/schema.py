import graphene

from graphene_mongo.fields import MongoengineConnectionField
from lemmas.models import Lemma
from mongoengine.queryset.visitor import Q

from .models import DictEntry
from .types import DictEntryType


class Query(graphene.ObjectType):
    dict_entry_list = graphene.List(
        DictEntryType,
        exact=graphene.String(),
        wanted=graphene.List(graphene.String),
        wanted_dicts=graphene.List(graphene.String))

    def resolve_dict_entry_list(self, info, wanted, wanted_dicts, exact=None, **kwargs):
        print('dicts kwargs', wanted, wanted_dicts)
        filter = Q(lookupLemmas__in=Lemma.objects(lemma=exact))
        if wanted:
            target_filter = Q(targetLang__in=wanted)
            source_filter = Q(srcLang__in=wanted)
            filter &= (target_filter & source_filter)

        if wanted_dicts:
            dict_filters = [
                Q(dictName=wanted_dict)
                for wanted_dict in wanted_dicts
                ]
            dict_filter = dict_filters.pop()
            for dict_filter in dict_filters:
                dict_filter |= dict_filter
            # filter &= (dict_filter)

        abba = DictEntry.objects(filter)
        return abba
