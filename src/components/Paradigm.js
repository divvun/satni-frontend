import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Set } from 'immutable';
import { stemToKey } from '../utils';
import { fetchParadigmIfNeeded } from '../paradigmActions';
import NounParadigm from './NounParadigm';
import VerbParadigm from './VerbParadigm';
import AdjParadigm from './AdjParadigm';

const langs = Set.of('fin', 'sma', 'sme', 'smj', 'smn', 'sms');
const poses = Set.of('N', 'V', 'A');

const Paradigm = ({lemma, language, pos}) => {
  const paradigmByStem = useSelector(state => state['paradigmByStem']);
  const dispatch = useDispatch();

    // return <div>Here comes the paradigm: {pos}, {lemma}, {language}</div>;
  useEffect(() => {
    dispatch(fetchParadigmIfNeeded({lemma, pos, language}));
  });

  if (paradigmByStem.errorMessage) {
    return <div>No paradigm for {lemma} {pos} {language}</div>;
  }

  if (paradigmByStem.isFetching) {
    return <div>Loading paradigms…</div>;
  }

  switch (pos) {
    case 'A':
      return <AdjParadigm
        paradigm={paradigmByStem[stemToKey({lemma, pos, language})]}
        language={language} />;
    case 'N':
      return <NounParadigm
        paradigm={paradigmByStem[stemToKey({lemma, pos, language})]}
        language={language} />;
    case 'V':
      return <VerbParadigm
        paradigm={paradigmByStem[stemToKey({lemma, pos, language})]}
        language={language} />;
    default:
      return <div>{lemma}, {language}, {pos}</div>;
  }
};

export default Paradigm;
