import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Trans } from '@lingui/macro';
import GET_TERM_ARTICLES from '../../operations/queries/getTermArticles';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import PresentTermArticles from './PresentTermArticles';
import { multilingualconceptListsByNames } from '../../utils';

const TermArticles = ({ lemma }) => {
  const langsDictsResult = useQuery(GET_LANGS_DICTS);
  const { srcLangs, targetLangs } = langsDictsResult.data;
  const { data, loading, error } = useQuery(GET_TERM_ARTICLES, {
    variables: {
      lemma,
      srcLangs,
      targetLangs,
    },
  });

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

  return (
    <PresentTermArticles
      lemma={lemma}
      termsByNames={multilingualconceptListsByNames(data.conceptList)}
    />
  );
};

TermArticles.propTypes = {
  lemma: PropTypes.string.isRequired,
};

export default TermArticles;
