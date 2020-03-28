from graphene_mongo import MongoengineObjectType
from graphene import relay

from .models import Lemma

class LemmaType(MongoengineObjectType):
    class Meta:
        model = Lemma
        interfaces = (relay.Node,)
