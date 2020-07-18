import graphene

import dicts.schema
import lemmas.schema
import lemmas.types
import stems.schema
import terms.schema


class Query(stems.schema.Query, dicts.schema.Query, terms.schema.Query,
            lemmas.schema.Query, graphene.ObjectType):
    pass


class Mutation(lemmas.schema.Mutations, graphene.ObjectType):
    pass


schema = graphene.Schema(
    query=Query,
    mutation=Mutation,
    types=[stems.types.StemType, terms.types.ConceptType])
