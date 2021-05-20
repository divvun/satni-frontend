import { gql } from '@apollo/client';

const GET_SEARCH_LIST_CLICKED_ITEM = gql`
  query GetSearchListClickedItem {
    searchListClickedItem @client
  }
`;

export default GET_SEARCH_LIST_CLICKED_ITEM;
