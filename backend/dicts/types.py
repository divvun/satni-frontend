from graphene import relay
from graphene_mongo import MongoengineObjectType

from .models import DictEntry, ExampleGroup, Restriction, TranslationGroup


class ExampleGroupType(MongoengineObjectType):
    class Meta:
        model = ExampleGroup


class RestrictionType(MongoengineObjectType):
    class Meta:
        model = Restriction


class TranslationGroupType(MongoengineObjectType):
    class Meta:
        model = TranslationGroup


class DictEntryType(MongoengineObjectType):
    class Meta:
        model = DictEntry
