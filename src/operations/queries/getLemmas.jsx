import { gql } from '@apollo/client';

const GET_LEMMAS = gql`
  query AllLemmas(
    $inputValue: String!
    $wantedLangs: [String]!
    $wantedDicts: [String]!
    $after: String
  ) {
    stemList(
      first: 100
      search: $inputValue
      wanted: $wantedLangs
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

export default GET_LEMMAS;
