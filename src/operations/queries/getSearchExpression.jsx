import { gql } from '@apollo/client';

const GET_SEARCH_EXPRESSION = gql`
  query GetSearchExpression {
    searchExpression @client
  }
`;

export default GET_SEARCH_EXPRESSION;
