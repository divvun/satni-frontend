import { gql } from '@apollo/client';

const HAS_STEM = gql`
  query HasStem($stem: String!) {
    hasStem(exact: $stem) {
      stem
    }
  }
`;

export default HAS_STEM;
