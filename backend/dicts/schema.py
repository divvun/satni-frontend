import graphene

from graphene_mongo.fields import MongoengineConnectionField
from mongoengine.queryset.visitor import Q
from lemmas.models import Lemma
from .models import DictEntry
from .types import DictEntryType


class Query(graphene.ObjectType):
    dict_entry_list = graphene.List(
        DictEntryType,
        exact=graphene.String(),
        wanted=graphene.List(graphene.String))

    def resolve_dict_entry_list(self, info, exact=None, **kwargs):
        print('dicts kwargs', kwargs)
        if kwargs['wanted']:
            target_filter = Q(targetLang__in=kwargs['wanted'])
            source_filter = Q(srcLang__in=kwargs['wanted'])
            return DictEntry.objects(
                Q(lookupLemmas__in=Lemma.objects(lemma=exact)) &
                target_filter &
                source_filter)

        return DictEntry.objects(
            Q(lookupLemma__in=Lemma.objects(lemma=exact)))
