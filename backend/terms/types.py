from graphene_mongo import MongoengineObjectType
from graphene import relay

from .models import Collection, Concept, MultiLingualConcept, Term


class TermType(MongoengineObjectType):
    class Meta:
        model = Term


class ConceptType(MongoengineObjectType):
    class Meta:
        model = Concept


class CollectionType(MongoengineObjectType):
    class Meta:
        model = Collection


class MultiLingualConceptType(MongoengineObjectType):
    class Meta:
        model = MultiLingualConcept
        interfaces = (relay.Node, )
