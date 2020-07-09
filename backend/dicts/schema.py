import graphene

from graphene_mongo.fields import MongoengineConnectionField
from lemmas.models import Lemma
from .models import ExampleGroup, Restriction, TranslationGroup, MeaningGroup, DictEntry
from .types import ExampleGroupType, RestrictionType, TranslationGroupType, MeaningGroupType, DictEntryType


class Query(graphene.ObjectType):
    dict_entry_list = graphene.List(DictEntryType, exact=graphene.String())

    def resolve_dict_entry_list(self, info, exact=None, **kwargs):
        return DictEntry.objects(
            lookupLemma__in=Lemma.objects(lemma=exact))
