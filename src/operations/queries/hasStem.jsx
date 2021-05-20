import { gql } from '@apollo/client';

const HAS_STEM = gql`
  query HasStem(
    $stem: String!
    $wantedLangs: [String]!
    $wantedDicts: [String]!
  ) {
    hasStem(exact: $stem, wanted: $wantedLangs, wantedDicts: $wantedDicts) {
      stem
    }
  }
`;

export default HAS_STEM;
