import graphene
from graphene_django import DjangoObjectType

from .models import Concept, MultiLingualConcept, Term


class ConceptType(DjangoObjectType):
    class Meta:
        model = Concept


class MultiLingualConceptType(DjangoObjectType):
    class Meta:
        model = MultiLingualConcept


class TermType(DjangoObjectType):
    class Meta:
        model = Term


class Query(graphene.ObjectType):
    pass
    # concepts = graphene.List(ConceptType)
    # mconcepts = graphene.List(MultiLingualConceptType)
    # mconcept = graphene.List(ConceptType, search=graphene.Int())
    # # terms = graphene.List(Term)
    #
    # def resolve_concepts(self, info, **kwargs):
    #     return Concept.objects.all()
    #
    # def resolve_mconcepts(self, info, **kwargs):
    #     return MultiLingualConcept.objects.all()
    #
    # def resolve_mconcept(self, info, search=None, **kwargs):
    #     return MultiLingualConcept.objects.get(id=search).concept_set.all()
