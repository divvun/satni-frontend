import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Set } from 'immutable';
import { stemToKey } from 'utils';
import { fetchParadigms } from 'features/paradigm/paradigmsSlice';
import NounParadigm from './NounParadigm';
import VerbParadigm from './VerbParadigm';
import AdjParadigm from './AdjParadigm';

const langs = Set.of('fin', 'sma', 'sme', 'smj', 'smn', 'sms');
const poses = Set.of('N', 'V', 'A');

const Paradigm = ({lemma, language, pos}) => {
  const paradigms = useSelector(state => state['paradigms']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParadigms({lemma, pos, language}));
  }, [dispatch, lemma, pos, language]);

  if (!langs.has(language)) {
    return <div>Cannot produce paradigm for {language}</div>;
  }

  if (!poses.has(pos)) {
    return <div>Cannot produce paradigm for {pos} in {language}</div>;
  }

  if (paradigms.errorMessage) {
    return <div>No paradigm for {lemma} {pos} {language}</div>;
  }

  if (paradigms.isFetching) {
    return <div>Loading paradigms…</div>;
  }

  switch (pos) {
    case 'A':
      return <AdjParadigm
        paradigm={paradigms[stemToKey({lemma, pos, language})]}
        language={language} />;
    case 'N':
      return <NounParadigm
        paradigm={paradigms[stemToKey({lemma, pos, language})]}
        language={language} />;
    case 'V':
      return <VerbParadigm
        paradigm={paradigms[stemToKey({lemma, pos, language})]}
        language={language} />;
    default:
      return <div>Failed to make paradigm for {lemma}, {language}, {pos}</div>;
  }
};

export default Paradigm;
