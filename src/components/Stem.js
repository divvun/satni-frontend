import React from 'react';
import { Div, Span, A } from 'glamorous';
import { Set } from 'immutable';

const korpLangs = Set.of('sma', 'sme', 'smj', 'smn', 'sms');

const KorpLink = (lang, lemma) => {
  const searchString = `Search for ${lemma} in Korp`;
  const korpAddress = (lang !== 'sme' && korpLangs.has(lang))
                        ? `http://gtweb.uit.no/korp/?mode=${lang}#?search=cqp|[lemma%3D"${lemma}"]`
                        : `http://gtweb.uit.no/korp/#?search=cqp|[lemma%3D"${lemma}"]`;
  return (<Span css={{float: 'right', display: 'inline'}}><A href={korpAddress} target='_blank'>{searchString}</A></Span>);
};

const Stem = ({ stem: {lemma, pos, lang, key}}) => {
  return (
    <Div key={key} css={{width: '100%'}}>
      <Span css={{ display: 'inline'}}>{key ? <Span css={{fontWeight: 'bold', marginLeft: '2%'}}>{lemma}</Span> : lemma} {pos} {lang}</Span>
      {korpLangs.has(lang) && (KorpLink(lang, lemma))}
    </Div>
  );
};

export default Stem;
