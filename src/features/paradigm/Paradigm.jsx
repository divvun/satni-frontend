import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import GET_NOUN from '../../operations/queries/getNoun';
import { filterParadigm, tableRowToParadigmList } from '../../utils';
import AdjParadigm, { AdjTableRows } from './AdjParadigm';
import NounParadigm, { NounTableRows } from './NounParadigm';
import VerbParadigm, { VerbTableRows } from './VerbParadigm';

const langs = new Set(['fin', 'sma', 'sme', 'smj', 'smn', 'sms']);
const poses = new Set(['N', 'V', 'A']);
const tableDict = {
  A: AdjTableRows,
  N: NounTableRows,
  V: VerbTableRows,
};

const Paradigm = ({ lemma, language, pos }) => {
  const fullParadigmLink = `https://gtweb.uit.no/cgi-bin/smi/smi.cgi?text=${lemma}&pos=${pos}&lang=${language}&mode=full&action=paradigm`;

  const { data, loading, error } = useQuery(GET_NOUN, {
    variables: {
      origform: lemma,
      language,
      paradigmTemplates:
        pos in tableDict && language in tableDict[pos]
          ? tableRowToParadigmList(tableDict[pos][language])
          : [],
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
          <AdjParadigm paradigm={filterParadigm(data)} language={language} />
          <a href={fullParadigmLink} rel="noreferrer noopener" target="_blank">
            More …
          </a>
        </>
      );
    case 'N':
      return (
        <>
          <NounParadigm paradigm={filterParadigm(data)} language={language} />
          <a href={fullParadigmLink} rel="noreferrer noopener" target="_blank">
            More …
          </a>
        </>
      );
    case 'V':
      return (
        <>
          <VerbParadigm paradigm={filterParadigm(data)} language={language} />
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
