import React from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@mui/styles';
import { Trans } from '@lingui/react/macro';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@mui/material/Typography';

import { availableLanguages, locationParser } from '../utils';
import dictionaryInfo from '../translateble_variables';
import GET_LANGS_DICTS from '../operations/queries/getLangsDicts';

const useStyles = makeStyles((theme) => ({
  status: {
    textAlign: 'center',
    margin: theme.spacing(1),
  },
}));

const dictStatus = (wantedDicts, currentLemma) => {
  if (wantedDicts.length === 1) {
    return (
      <>
        <Trans>Results only from</Trans> <Trans id={wantedDicts[0]}>{wantedDicts[0]}</Trans>{' '}
        <Trans>
          (<Link to={`/${currentLemma}`}>Show all</Link>)
        </Trans>
      </>
    );
  }

  return (
    <Trans>
      {wantedDicts.length}/{Object.keys(dictionaryInfo).length} sources.
    </Trans>
  );
};

const langStatus = (wantedDicts, srcLangs) => {
  if (wantedDicts.length > 1 || wantedDicts.includes('termwiki')) {
    return (
      <Trans>
        {srcLangs.length}/{availableLanguages.length} languages.
      </Trans>
    );
  }

  return null;
};

const StatusBar = () => {
  const classes = useStyles();
  const location = useLocation();
  const { currentDict, currentLemma } = locationParser(location.pathname);
  const langsDictsQueryResult = useQuery(GET_LANGS_DICTS);
  const { srcLangs } = langsDictsQueryResult.data;

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  return (
    <Typography className={classes.status}>
      {langStatus(wantedDicts, srcLangs)}{' '}
      {dictStatus(wantedDicts, currentLemma)}
    </Typography>
  );
};

export default StatusBar;
