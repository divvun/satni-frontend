import graphene
from graphene_django import DjangoObjectType
from django.db.models import Q

from .models import Lemma


class LemmaType(DjangoObjectType):
    class Meta:
        model = Lemma


class Query(graphene.ObjectType):
    lemmas = graphene.List(LemmaType, search=graphene.String())

    def resolve_lemmas(self, info, search=None, **kwargs):
        if search:
            filter = Q(lemma__istartswith=search)
            return Lemma.objects.filter(filter)

        return Lemma.objects.all()

class CreateLemma(graphene.Mutation):
    id = graphene.Int()
    lemma = graphene.String()
    partOfSpeech = graphene.String()
    language = graphene.String()

    class Arguments:
        lemma = graphene.String()
        partOfSpeech = graphene.String()
        language = graphene.String()

    def mutate(self, info, lemma, partOfSpeech, language):
        lemmaInstance = Lemma(lemma=lemma, partOfSpeech=partOfSpeech, language=language)
        lemmaInstance.save()

        return CreateLemma(
            id=lemmaInstance.id,
            lemma=lemmaInstance.lemma,
            partOfSpeech=lemmaInstance.partOfSpeech,
            language=lemmaInstance.language,
        )

class Mutation(graphene.ObjectType):
    create_lemma = CreateLemma.Field()
