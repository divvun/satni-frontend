import React, { useEffect, useState } from 'react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@mui/material/Typography';
import {
  filterParadigm,
  tableRowToParadigmList,
  SatniParadigm,
} from '../../utils';
import AdjParadigm, { AdjTableRows } from './AdjParadigm';
import NounParadigm, { NounTableRows } from './NounParadigm';
import VerbParadigm, { VerbTableRows } from './VerbParadigm';
import { fetchParadigm } from './paradigmService';

const langs = new Set(['fin', 'sma', 'sme', 'smj', 'smn', 'sms']);
const poses = new Set(['N', 'V', 'A']);

interface TableDict {
  [key: string]: {
    [language: string]: any;
  };
}

const tableDict: TableDict = {
  A: AdjTableRows,
  N: NounTableRows,
  V: VerbTableRows,
};

interface ParadigmProps {
  lemma: string;
  language: string;
  pos: string;
}

const Paradigm: React.FC<ParadigmProps> = ({ lemma, language, pos }) => {
  const [data, setData] = useState<SatniParadigm | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const fullParadigmLink = `https://gtweb.uit.no/cgi-bin/smi/smi.cgi?text=${lemma}&pos=${pos}&lang=${language}&mode=full&action=paradigm`;

  useEffect(() => {
    const loadParadigm = async () => {
      setLoading(true);
      setError(null);

      try {
        const templates =
          pos in tableDict && language in tableDict[pos]
            ? tableRowToParadigmList(tableDict[pos][language])
            : [];

        const generated = await fetchParadigm(lemma, language, templates);

        if (generated.length === 0) {
          setError(new Error('No paradigm data'));
        } else {
          setData({ generated });
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    loadParadigm();
  }, [lemma, language, pos]);

  if (!langs.has(language)) {
    return (
      // @ts-ignore - Material-UI v4 compatibility
      <Typography>Cannot produce paradigm for {language}</Typography>
    );
  }

  if (!poses.has(pos)) {
    return (
      // @ts-ignore - Material-UI v4 compatibility
      <Typography>
        Cannot produce paradigm for {pos} in {language}
      </Typography>
    );
  }

  if (error) {
    return (
      // @ts-ignore - Material-UI v4 compatibility
      <Typography>
        No paradigm for {lemma} {pos} {language}
      </Typography>
    );
  }

  if (loading) {
    return (
      // @ts-ignore - Material-UI v4 compatibility
      <Typography>Loading paradigms…</Typography>
    );
  }

  if (!data) {
    return (
      // @ts-ignore - Material-UI v4 compatibility
      <Typography>No data available</Typography>
    );
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
        // @ts-ignore - Material-UI v4 compatibility
        <Typography>
          Failed to make paradigm for {lemma}, {language}, {pos}
        </Typography>
      );
  }
};

export default Paradigm;
