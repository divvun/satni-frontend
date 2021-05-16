import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Trans } from '@lingui/macro';
import GET_DICT_ARTICLES from '../../operations/queries/getDictArticles';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import PresentDictArticles from './PresentDictArticles';

const DictArticles = ({ lemma }) => {
  const langsDictsResult = useQuery(GET_LANGS_DICTS);
  const { wantedDicts, wantedLangs } = langsDictsResult.data;
  const { data, loading, error } = useQuery(GET_DICT_ARTICLES, {
    variables: {
      lemma,
      wantedLangs,
      wantedDicts,
    },
  });
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

  return (
    <PresentDictArticles lemma={lemma} dictEntryList={data.dictEntryList} />
  );
};

DictArticles.propTypes = {
  lemma: PropTypes.string.isRequired,
};

export default DictArticles;
