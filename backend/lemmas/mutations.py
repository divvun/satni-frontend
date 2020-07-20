import graphene

from django.core.exceptions import ObjectDoesNotExist

from .models import Lemma
from .types import LemmaType


class LemmaInput(graphene.InputObjectType):
    ID = graphene.ID()
    lemma = graphene.String()
    pos = graphene.String()
    language = graphene.String()


class CreateLemmaMutation(graphene.Mutation):
    lemma = graphene.Field(LemmaType)

    class Arguments:
        lemma_data = LemmaInput(required=True)

    def mutate(self, info, lemma_data=None):
        lemma = Lemma(
            lemma=lemma_data.lemma,
            pos=lemma_data.pos,
            language=lemma_data.language,
        )
        lemma.save()

        return CreateLemmaMutation(lemma=lemma)


class UpdateLemmaMutation(graphene.Mutation):
    lemma = graphene.Field(LemmaType)

    class Arguments:
        lemma_data = LemmaInput(required=True)

    @staticmethod
    def get_object(id):
        return Lemma.objects.get(pk=id)

    def mutate(self, info, lemma_data=None):
        lemma = UpdateLemmaMutation.get_object(lemma_data.id)
        if lemma_data.lemma:
            lemma.lemma = lemma_data.lemma
        if lemma_data.pos:
            lemma.pos = lemma_data.pos
        if lemma_data.language:
            lemma.language = lemma_data.language

        lemma.save()

        return UpdateLemmaMutation(lemma=lemma)


class DeleteLemmaMutation(graphene.Mutation):
    class Arguments:
        id = graphene.ID(required=True)

    success = graphene.Boolean()

    def mutate(self, info, id):
        try:
            Lemma.objects.get(pk=id).delete()
            success = True
        except ObjectDoesNotExist:
            success = False

        return DeleteLemmaMutation(success=success)
