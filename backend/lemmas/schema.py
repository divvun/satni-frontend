import graphene

from graphene_mongo.fields import MongoengineConnectionField

from .models import Lemma
from .mutations import (CreateLemmaMutation, DeleteLemmaMutation,
                        UpdateLemmaMutation)
from .types import LemmaType


class Query(graphene.ObjectType):
    lemmas = MongoengineConnectionField(LemmaType)
    lemma_list = graphene.List(LemmaType)

    def resolve_lemma_list(self, info):
        return Lemma.objects.all()


class Mutations(graphene.ObjectType):
    create_lemma = CreateLemmaMutation.Field()
    update_lemma = UpdateLemmaMutation.Field()
    delete_lemma = DeleteLemmaMutation.Field()
