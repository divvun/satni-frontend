import { gql, TypedDocumentNode } from "@apollo/client";
import type { Query, QueryHasStemArgs } from "../../graphql/graphql";

export interface HasStemQuery {
  hasStem: Query["hasStem"];
}

export interface HasStemVariables {
  stem: QueryHasStemArgs["exact"];
  srcLangs: QueryHasStemArgs["srcLangs"];
  targetLangs: QueryHasStemArgs["targetLangs"];
  wantedDicts: QueryHasStemArgs["wantedDicts"];
}

const HAS_STEM: TypedDocumentNode<HasStemQuery, HasStemVariables> = gql`
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
