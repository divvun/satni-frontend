import React from "react";
import { useQuery } from "@apollo/client/react";
import { useLocation } from "react-router-dom";
import {
  GET_LANGS_DICTS,
  type GetLangsAndDictsQuery,
} from "../../operations/queries/getLangsDicts";
import { HAS_STEM, type HasStemQuery } from "../../operations/queries/hasStem";
import { locationParser } from "../../utils";
import Stem from "./Stem";

interface StemData {
  lemma: string;
  presentationLemma: string;
  pos: string;
  language: string;
  dialect?: string;
  country?: string;
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
}) => {
  const { lemma } = stem;
  const langsDictsQueryResult =
    useQuery<GetLangsAndDictsQuery>(GET_LANGS_DICTS);
  const location = useLocation();

  const isLoadingLangsDicts =
    langsDictsQueryResult.loading || !langsDictsQueryResult.data;

  const { srcLangs, targetLangs } = langsDictsQueryResult.data || {};
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data?.wantedDicts;

  const { data } = useQuery<HasStemQuery>(HAS_STEM, {
    variables: {
      stem: lemma,
      srcLangs: srcLangs || [],
      targetLangs: targetLangs || [],
      wantedDicts: wantedDicts || [],
    },
    skip: isLoadingLangsDicts,
  });

  return (
    <Stem
      stem={stem}
      restriction={restriction}
      withLink={Boolean(data?.hasStem && data.hasStem.length > 0)}
    />
  );
};

export default DictTargetStem;
