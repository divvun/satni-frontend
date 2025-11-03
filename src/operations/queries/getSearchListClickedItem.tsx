import { gql, TypedDocumentNode } from "@apollo/client";

export interface GetSearchListClickedItemQuery {
  searchListClickedItem: number;
}

export const GET_SEARCH_LIST_CLICKED_ITEM: TypedDocumentNode<
  GetSearchListClickedItemQuery,
  Record<string, never>
> = gql`
  query GetSearchListClickedItem {
    searchListClickedItem @client
  }
`;
