import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { useQuery, gql } from '@apollo/client';

import { filterProp } from '../../utils';
import AdjParadigm from './AdjParadigm';
import NounParadigm from './NounParadigm';
import VerbParadigm from './VerbParadigm';

const GET_NOUN = gql`
  query paradigm($text: String!, $lang: String!, $pos: String!) {
    paradigm(text: $text, lang: $lang, pos: $pos)
      @rest(
        type: "Paradigm"
        path: "smi.cgi?{args}&mode=full&action=paradigm&json=true"
      ) {
      analyses
    }
  }
`;

const langs = new Set(['fin', 'sma', 'sme', 'smj', 'smn', 'sms']);
const poses = new Set(['N', 'V', 'A']);

const Paradigm = ({ lemma, language, pos }) => {
  const fullParadigmLink = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?text=${lemma}&pos=${pos}&lang=${language}&mode=full&action=paradigm`;

  const { data, loading, error } = useQuery(GET_NOUN, {
    variables: {
      text: lemma,
      lang: language,
      pos,
    },
  });

  if (!langs.has(language)) {
    return <Typography>Cannot produce paradigm for {language}</Typography>;
  }

  if (!poses.has(pos)) {
    return (
      <Typography>
        Cannot produce paradigm for {pos} in {language}
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography>
        No paradigm for {lemma} {pos} {language}
      </Typography>
    );
  }

  if (loading) {
    return <Typography>Loading paradigms…</Typography>;
  }

  switch (pos) {
    case 'A':
      return (
        <>
          <AdjParadigm paradigm={data.paradigm} language={language} />
          <a href={fullParadigmLink} rel="noreferrer noopener" target="_blank">
            More …
          </a>
        </>
      );
    case 'N':
      return (
        <>
          <NounParadigm
            paradigm={filterProp(data.paradigm)}
            language={language}
          />
          <a href={fullParadigmLink} rel="noreferrer noopener" target="_blank">
            More …
          </a>
        </>
      );
    case 'V':
      return (
        <>
          <VerbParadigm paradigm={data.paradigm} language={language} />
          <a href={fullParadigmLink} rel="noreferrer noopener" target="_blank">
            More …
          </a>
        </>
      );
    default:
      return (
        <Typography>
          Failed to make paradigm for {lemma}, {language}, {pos}
        </Typography>
      );
  }
};

Paradigm.propTypes = {
  lemma: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  pos: PropTypes.string.isRequired,
};

export default Paradigm;
