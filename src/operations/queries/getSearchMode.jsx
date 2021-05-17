import { gql } from '@apollo/client';

const GET_SEARCH_MODE = gql`
  query GetSearchMode {
    searchMode @client
  }
`;

export default GET_SEARCH_MODE;
