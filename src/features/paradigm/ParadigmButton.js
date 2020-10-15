import React, { useEffect } from 'react';
import { Trans } from '@lingui/macro';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';

import { fetchParadigms } from 'features/paradigm/paradigmsSlice';
import { stemToKey } from 'utils';

const ParadigmButton = ({lemma, language, pos, onClick, classes}) => {
  const paradigmLangs = new Set(['sme', 'sma', 'smn', 'sms', 'smj', 'fin']);
  const paradigmPos = new Set(['N', 'V', 'Adj']);
  const paradigms = useSelector(state => state['paradigms']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParadigms({lemma, pos, language}));
  }, [dispatch, lemma, pos, language]);

  if (
    paradigmLangs.has(language) &&
    paradigmPos.has(pos) &&
    paradigms &&
    paradigms[stemToKey({lemma, pos, language})]) {
    return <Tooltip
      title=<Trans>Show paradigm for this word</Trans>
      aria-label=<Trans>Show paradigm for this word</Trans>
    >
      <IconButton
        className={classes.icons}
        component='span'
        aria-label='Paradigm'
        onClick={onClick}
        color='primary'
      >
        <InfoOutlined />
      </IconButton>
    </Tooltip>;
  }

  return <Tooltip
    title=<Trans>There is no paradigm for this word</Trans>
    aria-label=<Trans>There is no paradigm for this word</Trans>
  >
    <span>
      <IconButton
        disabled
        className={classes.icons}
        component='span'
        aria-label='Paradigm'
        onClick={onClick}
        color='primary'
      >
        <InfoOutlined />
      </IconButton>
    </span>
  </Tooltip>;
};

ParadigmButton.propTypes = {
  lemma: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

export default ParadigmButton;
