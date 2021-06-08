import React from 'react';
import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

import Stem from './Stem';
import { locationParser } from '../../utils';
import HAS_STEM from '../../operations/queries/hasStem';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';

const DictTargetStem = ({ stem, restriction }) => {
  const { lemma } = stem;
  const langsDictsQueryResult = useQuery(GET_LANGS_DICTS);
  const { targetLangs } = langsDictsQueryResult.data;
  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  const { data, loading } = useQuery(HAS_STEM, {
    variables: {
      stem: lemma,
      targetLangs,
      wantedDicts,
    },
  });

  if (loading) return <CircularProgress size={20} />;

  return (
    <Stem
      stem={stem}
      restriction={restriction}
      withLink={data && data.hasStem.length}
    />
  );
};

DictTargetStem.propTypes = {
  stem: PropTypes.shape.isRequired,
  restriction: PropTypes.shape,
};

DictTargetStem.defaultProps = {
  restriction: '',
};

export default DictTargetStem;
