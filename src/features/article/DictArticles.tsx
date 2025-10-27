import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/react/macro';
import { useLocation } from 'react-router-dom';
import GET_DICT_ARTICLES from '../../operations/queries/getDictArticles';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import { locationParser } from '../../utils';
import PresentDictArticles from './PresentDictArticles';

interface DictArticlesProps {
  lemma: string;
}

interface LangsDictsData {
  srcLangs: string[];
  targetLangs: string[];
  wantedDicts: string[];
}

interface DictArticlesData {
  dictEntryList: any[];
}

const DictArticles: React.FC<DictArticlesProps> = ({ lemma }) => {
  const langsDictsQueryResult = useQuery<LangsDictsData>(GET_LANGS_DICTS);

  if (langsDictsQueryResult.loading || !langsDictsQueryResult.data) {
    return (
      <Trans>
        <p>Loading dicts …</p>
      </Trans>
    );
  }

  const { srcLangs, targetLangs } = langsDictsQueryResult.data;
  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  const { data, loading, error } = useQuery<DictArticlesData>(
    GET_DICT_ARTICLES,
    {
      variables: {
        lemma,
        srcLangs,
        targetLangs,
        wantedDicts,
      },
    },
  );

  if (loading) {
    return (
      <Trans>
        <p>Loading dicts …</p>
      </Trans>
    );
  }
  if (error) {
    return (
      <Trans>
        <p>Error {error.message}</p>
      </Trans>
    );
  }

  if (!data) {
    return (
      <Trans>
        <p>No data available</p>
      </Trans>
    );
  }

  return (
    <PresentDictArticles lemma={lemma} dictEntryList={data.dictEntryList} />
  );
};

export default DictArticles;
