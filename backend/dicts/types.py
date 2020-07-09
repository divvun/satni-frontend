from graphene_mongo import MongoengineObjectType
from graphene import relay

from .models import ExampleGroup, Restriction, TranslationGroup, MeaningGroup, DictEntry


class ExampleGroupType(MongoengineObjectType):
    class Meta:
        model = ExampleGroup

class RestrictionType(MongoengineObjectType):
    class Meta:
        model = Restriction


class TranslationGroupType(MongoengineObjectType):
    class Meta:
        model = TranslationGroup

class MeaningGroupType(MongoengineObjectType):
    class Meta:
        model = MeaningGroup


class DictEntryType(MongoengineObjectType):
    class Meta:
        model = DictEntry
