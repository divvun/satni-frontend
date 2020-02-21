import graphene

import lemmas.schema


class Query(lemmas.schema.Query, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query)
