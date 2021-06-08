import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { Trans } from '@lingui/macro';
import { useLocation } from 'react-router-dom';
import { locationParser } from '../../utils';
import GET_DICT_ARTICLES from '../../operations/queries/getDictArticles';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import PresentDictArticles from './PresentDictArticles';

const DictArticles = ({ lemma }) => {
  const langsDictsQueryResult = useQuery(GET_LANGS_DICTS);
  const { srcLangs, targetLangs } = langsDictsQueryResult.data;
  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  const { data, loading, error } = useQuery(GET_DICT_ARTICLES, {
    variables: {
      lemma,
      srcLangs,
      targetLangs,
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
