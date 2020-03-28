import graphene
from graphene_mongo.fields import MongoengineConnectionField

from .models import Concept, MultiLingualConcept, Term
from .types import ConceptType, MultiLingualConceptType, TermType



class Query(graphene.ObjectType):
    multilingualconcepts = MongoengineConnectionField(MultiLingualConceptType)
    multilingualconcept_list = graphene.List(MultiLingualConceptType)

    def resolve_multilingualconcept_list(self, info):
        return MultiLingualConcept.objects.all()
