import graphene
from graphene_django import DjangoObjectType

from .models import Lemma


class LemmaType(DjangoObjectType):
    class Meta:
        model = Lemma


class Query(graphene.ObjectType):
    lemmas = graphene.List(LemmaType)

    def resolve_lemmas(self, info, **kwargs):
        return Lemma.objects.all()
