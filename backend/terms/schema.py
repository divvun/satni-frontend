import graphene

from graphene_mongo.fields import MongoengineConnectionField
from lemmas.models import Lemma
from .models import Concept, MultiLingualConcept, Term
from .types import ConceptType, MultiLingualConceptType, TermType


class Query(graphene.ObjectType):
    multilingualconcept_list = graphene.List(
        MultiLingualConceptType, exact=graphene.String())

    def resolve_multilingualconcept_list(self, info, exact=None, **kwargs):
        return MultiLingualConcept.objects(
            concepts__terms__expression__in=Lemma.objects(lemma=exact))
