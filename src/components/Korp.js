import React from 'react';
import { css } from 'react-emotion';
import { Set } from 'immutable';

const korpLangs = Set.of('sma', 'sme', 'smj', 'smn', 'sms');

const KorpLink = ({language, lemma}) => {
  const searchString = `Search for ${lemma} in Korp`;
  const korpAddress = language !== 'sme'
                        ? `http://gtweb.uit.no/korp/?mode=${language}#?search=cqp|[lemma%3D"${lemma}"]`
                        : `http://gtweb.uit.no/korp/#?search=cqp|[lemma%3D"${lemma}"]`;
  return (
    <span><a href={korpAddress} target='_blank' rel='noopener noreferrer'>{searchString}</a></span>
  );
};

const Korp = ({language, lemma}) => {
  return (
    <div>
      {
      korpLangs.has(language)
      ? <KorpLink language={language} lemma={lemma} />
      : <span>There is no corpus for {language}</span>}
    </div>
  );
};

export default Korp;
