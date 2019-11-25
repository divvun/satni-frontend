import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Set } from 'immutable';
import { stemToKey } from '../utils';
import { fetchParadigmIfNeeded } from '../paradigmActions';
import NounParadigm from './NounParadigm';
import VerbParadigm from './VerbParadigm';

const langs = Set.of('fin', 'sma', 'sme', 'smj', 'smn', 'sms');
const poses = Set.of('N', 'V', 'Adj');

const Paradigm = ({lemma, language, pos}) => {
  if (poses.has(pos) && langs.has(language)) {
    const paradigmByStem = useSelector(state => state['paradigmByStem']);
    const dispatch = useDispatch();

    // return <div>Here comes the paradigm: {pos}, {lemma}, {language}</div>;
    useEffect(() => {
      dispatch(fetchParadigmIfNeeded({lemma, pos, language}));
    });

    console.log(paradigmByStem);
    if (paradigmByStem.errorMessage) {
      return <div>No paradigm for {lemma} {pos} {language}</div>;
    }

    if (paradigmByStem.isFetching) {
      return <div>Loading paradigms…</div>;
    }

    switch (pos) {
      case 'N':
        return <NounParadigm
          paradigm={paradigmByStem[stemToKey({lemma, pos, language})]}
          language={language} />;
        break;
      case 'V':
        return <VerbParadigm
          paradigm={paradigmByStem[stemToKey({lemma, pos, language})]}
          language={language} />;
        break;
      default:
        return <div>{lemma}, {language}, {pos}</div>;
    }
  } else {
    return <div>{lemma}, {language}, {pos}</div>;
  }
};

export default Paradigm;
