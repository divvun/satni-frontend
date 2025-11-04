import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import Link from "@mui/material/Link";
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
      <Typography>Cannot produce paradigm for {language}</Typography>
    );
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
    return (
      <Typography>Loading paradigms…</Typography>
    );
  }

  if (!data) {
    return (
      <Typography>No data available</Typography>
    );
  }

  switch (pos) {
    case 'A':
      return (
        <>
          <AdjParadigm paradigm={filterParadigm(data)} language={language} />
          <Link
            href={fullParadigmLink}
            rel="noreferrer noopener"
            target="_blank"
          >
            More …
          </Link>
        </>
      );
    case 'N':
      return (
        <>
          <NounParadigm paradigm={filterParadigm(data)} language={language} />
          <Link
            href={fullParadigmLink}
            rel="noreferrer noopener"
            target="_blank"
          >
            More …
          </Link>
        </>
      );
    case 'V':
      return (
        <>
          <VerbParadigm paradigm={filterParadigm(data)} language={language} />
          <Link
            href={fullParadigmLink}
            rel="noreferrer noopener"
            target="_blank"
          >
            More …
          </Link>
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

export default Paradigm;
