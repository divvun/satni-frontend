import graphene

import lemmas.schema


class Query(lemmas.schema.Query, graphene.ObjectType):
    pass


class Mutation(lemmas.schema.Mutation, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation)
