from graphene_mongo import MongoengineObjectType
from graphene import relay

from .models import Concept, MultiLingualConcept, Term

class ConceptType(MongoengineObjectType):
    class Meta:
        model = Concept
        interfaces = (relay.Node,)

class MultiLingualConceptType(MongoengineObjectType):
    class Meta:
        model = MultiLingualConcept
        interfaces = (relay.Node,)

class TermType(MongoengineObjectType):
    class Meta:
        model = Term
        interfaces = (relay.Node,)
