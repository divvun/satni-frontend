import { gql, TypedDocumentNode } from "@apollo/client";

export interface GetSearchModeQuery {
  searchMode: string;
}

const GET_SEARCH_MODE: TypedDocumentNode<GetSearchModeQuery, never> = gql`
  query GetSearchMode {
    searchMode @client
  }
`;

export default GET_SEARCH_MODE;
