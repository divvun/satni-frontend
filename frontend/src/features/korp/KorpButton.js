import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@material-ui/core/IconButton';
import ViewHeadlineOutlined from '@material-ui/icons/ViewHeadlineOutlined';

import { isLemmaInKorp } from 'features/korp/korpSlice';

const KorpButton = ({language, lemma, classes}) => {
  const korpLangs = new Set(['sma', 'sme', 'smj', 'smn', 'sms']);
  const korp = useSelector(state => state['korp']);
  const dispatch = useDispatch();
  const korpAddress = language !== 'sme'
    ? `http://gtweb.uit.no/korp/?mode=${language}#?search=cqp|[lemma%3D"${lemma}"]`
    : `http://gtweb.uit.no/korp/#?search=cqp|[lemma%3D"${lemma}"]`;

  useEffect(() => {
    dispatch(isLemmaInKorp(language, lemma));
  }, [dispatch, language, lemma]);

  if (korpLangs.has(language) && korp && korp['lemmaExists']) {
    return <IconButton
      className={classes.icons}
      component='span'
      aria-label='Corpus'
      color='primary'
      onClick={() => {
        const a = document.createElement('a');
        a.href = korpAddress;
        a.target = '_blank';
        a.rel = 'noopener';
        a.click();
      }}
    >
      <ViewHeadlineOutlined />
    </IconButton>;
  }

  return <IconButton
    disabled
    className={classes.icons}
    component='span'
    aria-label='Corpus'
  >
    <ViewHeadlineOutlined />
  </IconButton>;
};

export default KorpButton;
