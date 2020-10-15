import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { filterProp, stemToKey } from 'utils';
import { fetchParadigms } from 'features/paradigm/paradigmsSlice';
import AdjParadigm from './AdjParadigm';
import NounParadigm from './NounParadigm';
import VerbParadigm from './VerbParadigm';

const langs = new Set(['fin', 'sma', 'sme', 'smj', 'smn', 'sms']);
const poses = new Set(['N', 'V', 'A']);

const Paradigm = ({lemma, language, pos}) => {
  const paradigms = useSelector(state => state['paradigms']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParadigms({lemma, pos, language}));
  }, [dispatch, lemma, pos, language]);

  if (!langs.has(language)) {
    return <Typography>Cannot produce paradigm for {language}</Typography>;
  }

  if (!poses.has(pos)) {
    return <Typography>Cannot produce paradigm for {pos} in {language}</Typography>;
  }

  if (paradigms.errorMessage) {
    return <Typography>No paradigm for {lemma} {pos} {language}</Typography>;
  }

  if (paradigms.isFetching) {
    return <Typography>Loading paradigms…</Typography>;
  }

  switch (pos) {
  case 'A':
    return <AdjParadigm
      paradigm={paradigms[stemToKey({lemma, pos, language})]}
      language={language} />;
  case 'N':
    return <NounParadigm
      paradigm={filterProp(paradigms[stemToKey({lemma, pos, language})])}
      language={language} />;
  case 'V':
    return <VerbParadigm
      paradigm={paradigms[stemToKey({lemma, pos, language})]}
      language={language} />;
  default:
    return <Typography>Failed to make paradigm for {lemma}, {language}, {pos}</Typography>;
  }
};

Paradigm.propTypes = {
  lemma: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired
};

export default Paradigm;
