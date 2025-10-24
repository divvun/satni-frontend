import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import HAS_STEM from '../../operations/queries/hasStem';
import { locationParser } from '../../utils';
import Stem from './Stem';

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

interface LangsDictsData {
  srcLangs: string[];
  targetLangs: string[];
  wantedDicts: string[];
}

interface HasStemData {
  hasStem: any[];
}

const DictTargetStem: React.FC<DictTargetStemProps> = ({
  stem,
  restriction,
}) => {
  const { lemma } = stem;
  const langsDictsQueryResult = useQuery<LangsDictsData>(GET_LANGS_DICTS);

  // Handle loading and error states for the first query
  if (langsDictsQueryResult.loading || !langsDictsQueryResult.data) {
    return (
      // @ts-ignore - Material-UI v4 compatibility
      <CircularProgress size={20} />
    );
  }

  const { srcLangs, targetLangs } = langsDictsQueryResult.data;
  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  const { data, loading } = useQuery<HasStemData>(HAS_STEM, {
    variables: {
      stem: lemma,
      srcLangs,
      targetLangs,
      wantedDicts,
    },
  });

  if (loading)
    return (
      // @ts-ignore - Material-UI v4 compatibility
      <CircularProgress size={20} />
    );

  return (
    <Stem
      stem={stem}
      restriction={restriction}
      withLink={data && data.hasStem.length > 0}
    />
  );
};

export default DictTargetStem;
