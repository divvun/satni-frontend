import { gql, TypedDocumentNode } from "@apollo/client";
import type { Query, QueryGeneratedArgs } from "../../graphql/graphql";

export interface GeneratedQuery {
  generated: Query["generated"];
}

export type GeneratedVariables = QueryGeneratedArgs;

const GET_NOUN: TypedDocumentNode<GeneratedQuery, GeneratedVariables> = gql`
  query Generated(
    $origform: String!
    $language: String!
    $paradigmTemplates: [String]!
  ) {
    generated(
      origform: $origform
      language: $language
      paradigmTemplates: $paradigmTemplates
    ) {
      paradigmTemplate
      analyses {
        wordform
        weight
      }
    }
  }
`;

export default GET_NOUN;
