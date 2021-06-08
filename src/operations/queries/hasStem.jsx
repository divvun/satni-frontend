import { gql } from '@apollo/client';

const HAS_STEM = gql`
  query HasStem(
    $stem: String!
    $targetLangs: [String]!
    $wantedDicts: [String]!
  ) {
    hasStem(
      exact: $stem
      targetLangs: $targetLangs
      wantedDicts: $wantedDicts
    ) {
      stem
    }
  }
`;

export default HAS_STEM;
