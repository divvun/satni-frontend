import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/react/macro';
import { GET_LANGS_DICTS, 
  type GetLangsAndDictsQuery,
} from '../../operations/queries/getLangsDicts';
import { GET_TERM_ARTICLES, 
  type TermArticlesQuery,
} from '../../operations/queries/getTermArticles';
import { multilingualconceptListsByNames } from '../../utils';
import PresentTermArticles from './PresentTermArticles';
import type { ConceptType, Maybe } from '../../graphql/graphql';

interface TermArticlesProps {
  lemma: string;
}

const TermArticles: React.FC<TermArticlesProps> = ({ lemma }) => {
  const langsDictsResult = useQuery<GetLangsAndDictsQuery>(GET_LANGS_DICTS);

  if (langsDictsResult.loading || !langsDictsResult.data) {
    return (
      <Trans>
        <p>Loading terms …</p>
      </Trans>
    );
  }

  const { srcLangs, targetLangs } = langsDictsResult.data;
  const { data, loading, error } = useQuery<TermArticlesQuery>(
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

  if (!data || !data.conceptList) {
    return (
      <Trans>
        <p>No data available</p>
      </Trans>
    );
  }

  const filteredConcepts = data.conceptList.filter(
    (concept: Maybe<ConceptType>): concept is ConceptType => concept != null
  );

  return (
    <PresentTermArticles
      lemma={lemma}
      termsByNames={multilingualconceptListsByNames(filteredConcepts as any)}
    />
  );
};

export default TermArticles;
