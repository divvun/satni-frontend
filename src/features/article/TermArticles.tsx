import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import GET_TERM_ARTICLES from '../../operations/queries/getTermArticles';
import { multilingualconceptListsByNames } from '../../utils';
import PresentTermArticles from './PresentTermArticles';

interface TermArticlesProps {
  lemma: string;
}

interface LangsDictsData {
  srcLangs: string[];
  targetLangs: string[];
  wantedDicts: string[];
}

interface TermArticlesData {
  conceptList: any[];
}

const TermArticles: React.FC<TermArticlesProps> = ({ lemma }) => {
  const langsDictsResult = useQuery<LangsDictsData>(GET_LANGS_DICTS);

  if (langsDictsResult.loading || !langsDictsResult.data) {
    return (
      <Trans>
        <p>Loading terms …</p>
      </Trans>
    );
  }

  const { srcLangs, targetLangs } = langsDictsResult.data;
  const { data, loading, error } = useQuery<TermArticlesData>(
    GET_TERM_ARTICLES,
    {
      variables: {
        lemma,
        srcLangs,
        targetLangs,
      },
    },
  );

  if (loading) {
    return (
      <Trans>
        <p>Loading terms …</p>
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
    <PresentTermArticles
      lemma={lemma}
      termsByNames={multilingualconceptListsByNames(data.conceptList)}
    />
  );
};

export default TermArticles;
