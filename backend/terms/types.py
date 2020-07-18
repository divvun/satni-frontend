from graphene_mongo import MongoengineObjectType

from .models import Concept, Term


class TermType(MongoengineObjectType):
    class Meta:
        model = Term


class ConceptType(MongoengineObjectType):
    class Meta:
        model = Concept
