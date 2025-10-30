import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/react/macro';
import { useLocation } from 'react-router-dom';
import GET_DICT_ARTICLES, {
  type DictArticlesQuery,
} from '../../operations/queries/getDictArticles';
import GET_LANGS_DICTS, {
  type GetLangsAndDictsQuery,
} from '../../operations/queries/getLangsDicts';
import { locationParser } from '../../utils';
import PresentDictArticles from './PresentDictArticles';
import type { DictEntryType, Maybe } from '../../graphql/graphql';

interface DictArticlesProps {
  lemma: string;
}

const DictArticles: React.FC<DictArticlesProps> = ({ lemma }) => {
  const langsDictsQueryResult = useQuery<GetLangsAndDictsQuery>(GET_LANGS_DICTS);

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

  const { data, loading, error } = useQuery<DictArticlesQuery>(
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

  if (!data || !data.dictEntryList) {
    return (
      <Trans>
        <p>No data available</p>
      </Trans>
    );
  }

  const filteredEntries = data.dictEntryList.filter(
    (entry: Maybe<DictEntryType>): entry is DictEntryType => entry != null
  );

  return (
    <PresentDictArticles
      lemma={lemma}
      dictEntryList={filteredEntries as any}
    />
  );
};

export default DictArticles;
