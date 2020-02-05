import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
  }, [dispatch, language, lemma]);

  if (korp.error) {
    return <Typography component='span'>An error occured {korp.error}</Typography>;
  }

  if (korp.isFetching) {
    return <Typography component='span'>Checking if {lemma} exists in Korp.</Typography>;
  }

  if (korp['lemmaExists']) {
    return <Link href={korpAddress} target='_blank' rel='noopener noreferrer'><Typography component='span'>{searchString}</Typography></Link>;
  } else {
    return <Typography component='span'>{lemma} was not found in {language} Korp</Typography>;
  }
};

const Korp = ({language, lemma}) => {
  const korpLangs = new Set(['sma', 'sme', 'smj', 'smn', 'sms']);

  return (
    <div>
      {
      korpLangs.has(language)
      ? <KorpLink language={language} lemma={lemma} />
      : <Typography component='span'>There is no corpus for {language}</Typography>}
    </div>
  );
};

export default Korp;
