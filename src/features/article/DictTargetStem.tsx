import React from "react";
import Stem from "./Stem";

interface StemData {
  lemma: string;
  presentationLemma: string;
  pos: string;
  language: string;
  dialect?: string;
  country?: string;
  hasStem?: boolean | null;
}

interface RestrictionData {
  __typename?: string;
  restriction: string;
  attributes?: any;
}

interface DictTargetStemProps {
  stem: StemData;
  restriction?: RestrictionData | null;
}

const DictTargetStem: React.FC<DictTargetStemProps> = ({
  stem,
  restriction,
}) => (
  <Stem
    stem={stem}
    restriction={restriction}
    withLink={Boolean(stem.hasStem)}
  />
);

export default DictTargetStem;
