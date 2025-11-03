import { gql, TypedDocumentNode } from "@apollo/client";

export interface GetSearchModeQuery {
  searchMode: string;
}

export const GET_SEARCH_MODE: TypedDocumentNode<
  GetSearchModeQuery,
  never
> = gql`
  query GetSearchMode {
    searchMode @client
  }
`;
