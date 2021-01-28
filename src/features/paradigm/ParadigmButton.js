import React from 'react';
import { Trans } from '@lingui/macro';
import IconButton from '@material-ui/core/IconButton';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_NOUN = gql`
  query paradigm($text: String!, $lang: String!, $pos: String!) {
    paradigm(text: $text, lang: $lang, pos: $pos)
    @rest(type: "Paradigm", path: "smi.cgi?{args}&mode=full&action=paradigm&json=true") {
      analyses
    }
  }
`;

const ParadigmButton = ({lemma, language, pos, onClick, classes}) => {
  const paradigmLangs = new Set(['sme', 'sma', 'smn', 'sms', 'smj', 'fin']);
  const paradigmPos = new Set(['N', 'V', 'A']);
  const {data} = useQuery(
    GET_NOUN, {
      variables: {
        text: lemma,
        lang: language,
        pos: pos
      }
    }
  );

  if (
    paradigmLangs.has(language) &&
    paradigmPos.has(pos) &&
    data) {
    return <Tooltip
      title={<Trans>Show paradigm for this word</Trans>}
      aria-label={<Trans>Show paradigm for this word</Trans>}
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
    title={<Trans>There is no paradigm for this word</Trans>}
    aria-label={<Trans>There is no paradigm for this word</Trans>}
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
