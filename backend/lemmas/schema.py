import graphene
from graphene_django import DjangoObjectType
from django.db.models import Q

from .models import Lemma


class LemmaType(DjangoObjectType):
    class Meta:
        model = Lemma


class Query(graphene.ObjectType):
    lemmas = graphene.List(LemmaType, search=graphene.String())
    elemmas = graphene.List(LemmaType, exact=graphene.String())

    def resolve_lemmas(self, info, search=None, **kwargs):
        if search:
            filter = Q(lemma__istartswith=search)
            return Lemma.objects.filter(filter)

        return Lemma.objects.all()

    def resolve_elemmas(self, info, exact=None, **kwargs):
        if exact:
            filter = Q(lemma__iexact=exact)
            return Lemma.objects.filter(filter)

        return Lemma.objects.all()


class CreateLemma(graphene.Mutation):
    id = graphene.Int()
    lemma = graphene.String()
    pos = graphene.String()
    language = graphene.String()

    class Arguments:
        lemma = graphene.String()
        pos = graphene.String()
        language = graphene.String()

    def mutate(self, info, lemma, pos, language):
        lemmaInstance = Lemma(
            lemma=lemma, pos=pos, language=language)
        lemmaInstance.save()

        return CreateLemma(
            id=lemmaInstance.id,
            lemma=lemmaInstance.lemma,
            pos=lemmaInstance.pos,
            language=lemmaInstance.language,
        )


class Mutation(graphene.ObjectType):
    create_lemma = CreateLemma.Field()
