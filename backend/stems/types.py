import graphene
from graphene_mongo import MongoengineObjectType

from .models import Stem


class Connection(graphene.Connection):
    class Meta:
        abstract = True

    total_count = graphene.Int()

    def resolve_total_count(self, info):
        return len(self.iterable)


class StemType(MongoengineObjectType):
    class Meta:
        model = Stem
        interfaces = (graphene.relay.Node, )
        connection_class = Connection
