import graphene

import lemmas.types
import lemmas.schema
import terms.schema


class Query(terms.schema.Query, lemmas.schema.Query, graphene.ObjectType):
    pass


class Mutation(lemmas.schema.Mutations, graphene.ObjectType):
    pass


schema = graphene.Schema(query=Query, mutation=Mutation, types=[lemmas.types.LemmaType])
