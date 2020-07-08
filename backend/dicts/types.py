from graphene_mongo import MongoengineObjectType
from graphene import relay

from .models import ExampleGroup, Reference, TranslationGroup, MeaningGroup, DictEntry


class ExampleGroupType(MongoengineObjectType):
    class Meta:
        model = ExampleGroup

class ReferenceType(MongoengineObjectType):
    class Meta:
        model = Reference


class TranslationGroupType(MongoengineObjectType):
    class Meta:
        model = TranslationGroup

class MeaningGroupType(MongoengineObjectType):
    class Meta:
        model = MeaningGroup


class DictEntryType(MongoengineObjectType):
    class Meta:
        model = DictEntry
