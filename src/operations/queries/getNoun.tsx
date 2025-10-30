import { gql } from '@apollo/client';

const GET_NOUN = gql`
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
