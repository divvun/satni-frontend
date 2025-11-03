import { gql, TypedDocumentNode } from "@apollo/client";
import type { Query, QueryStemListArgs } from "../../graphql/graphql";

export interface AllLemmasQuery {
  stemList: Query["stemList"];
}

export interface AllLemmasVariables extends Omit<QueryStemListArgs, "first"> {
  inputValue: string;
  searchMode: string;
}

export const GET_LEMMAS: TypedDocumentNode<
  AllLemmasQuery,
  AllLemmasVariables
> = gql`
  query AllLemmas(
    $inputValue: String!
    $searchMode: String!
    $srcLangs: [String]!
    $targetLangs: [String]!
    $wantedDicts: [String]!
    $after: String
  ) {
    stemList(
      first: 100
      search: $inputValue
      mode: $searchMode
      srcLangs: $srcLangs
      targetLangs: $targetLangs
      wantedDicts: $wantedDicts
      after: $after
    ) {
      totalCount
      edges {
        node {
          stem
          srclangs
          targetlangs
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;
