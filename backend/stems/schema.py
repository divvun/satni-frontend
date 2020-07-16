import graphene

from graphene_mongo.fields import MongoengineConnectionField

from .models import Stem
from .types import StemType


class Query(graphene.ObjectType):
    stem_list = MongoengineConnectionField(StemType, search=graphene.String())

    def resolve_stem_list(self, info, search=None, **kwargs):
        if search:
            return Stem.objects.filter(stem__istartswith=search).order_by('stem')

        return Stem.objects.all().order_by('stem')
