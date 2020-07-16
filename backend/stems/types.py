from graphene import relay

from graphene_mongo import MongoengineObjectType

from .models import Stem


class StemType(MongoengineObjectType):
    class Meta:
        model = Stem
        interfaces = (relay.Node, )
