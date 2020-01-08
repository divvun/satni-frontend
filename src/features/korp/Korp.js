import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isLemmaInKorp } from 'features/korp/korpSlice';

const KorpLink = ({language, lemma}) => {
  const korp = useSelector(state => state['korp']);
  const dispatch = useDispatch();
  const searchString = `Lookup ${lemma} in Korp`;
  const korpAddress = language !== 'sme'
  ? `http://gtweb.uit.no/korp/?mode=${language}#?search=cqp|[lemma%3D"${lemma}"]`
  : `http://gtweb.uit.no/korp/#?search=cqp|[lemma%3D"${lemma}"]`;

  useEffect(() => {
    dispatch(isLemmaInKorp(language, lemma));
  }, [language, lemma]);

  if (korp.error) {
    return <span>An error occured {korp.error}</span>;
  }

  if (korp.isFetching) {
    return <span>Checking if {lemma} exists in Korp.</span>;
  }

  if (korp['lemmaExists']) {
    return <span><a href={korpAddress} target='_blank' rel='noopener noreferrer'>{searchString}</a></span>;
  } else {
    return <span>{lemma} was not found in {language} Korp</span>;
  }

  return null;
};

const Korp = ({language, lemma}) => {
  const korpLangs = new Set(['sma', 'sme', 'smj', 'smn', 'sms']);

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
