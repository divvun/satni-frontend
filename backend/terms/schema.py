import graphene

from graphene_mongo.fields import MongoengineConnectionField
from lemmas.models import Lemma
from mongoengine.queryset.visitor import Q

from .models import Concept
from .types import ConceptType


class Query(graphene.ObjectType):
    concept_list = graphene.List(
        ConceptType,
        exact=graphene.String(),
        wanted=graphene.List(graphene.String))

    def resolve_concept_list(self, info, exact, wanted, **kwargs):
        print('namelist', exact)
        names = [
            concept.name for concept in Concept.objects(
                terms__expression__in=Lemma.objects(lemma=exact))
        ]

        if not names:
            return []

        name_queries = [Q(name=name) for name in names]
        name_filter = name_queries.pop()
        for item in name_queries:
            name_filter |= item

        named = Concept.objects(name_filter)

        return [
            name for name in named
            if name.terms[0].expression.language in wanted
        ]
