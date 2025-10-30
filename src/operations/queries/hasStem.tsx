import { gql } from '@apollo/client';

const HAS_STEM = gql`
  query HasStem(
    $stem: String!
    $srcLangs: [String]!
    $targetLangs: [String]!
    $wantedDicts: [String]!
  ) {
    hasStem(
      exact: $stem
      srcLangs: $srcLangs
      targetLangs: $targetLangs
      wantedDicts: $wantedDicts
    ) {
      stem
    }
  }
`;

export default HAS_STEM;
