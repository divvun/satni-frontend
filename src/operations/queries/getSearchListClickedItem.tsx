import { gql, TypedDocumentNode } from "@apollo/client";

export interface GetSearchListClickedItemQuery {
  searchListClickedItem: number;
}

const GET_SEARCH_LIST_CLICKED_ITEM: TypedDocumentNode<
  GetSearchListClickedItemQuery,
  never
> = gql`
  query GetSearchListClickedItem {
    searchListClickedItem @client
  }
`;

export default GET_SEARCH_LIST_CLICKED_ITEM;
