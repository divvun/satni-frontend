import React from 'react';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { Link, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

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
        <Trans>Results only from</Trans> <Trans id={wantedDicts[0]} />{' '}
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

const langStatus = (wantedDicts, wantedLangs) => {
  if (wantedDicts.length > 1 || wantedDicts.includes('termwiki')) {
    return (
      <Trans>
        {wantedLangs.length}/{availableLanguages.length} languages.
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
  const { wantedLangs } = langsDictsQueryResult.data;

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  return (
    <Typography className={classes.status}>
      {langStatus(wantedDicts, wantedLangs)}{' '}
      {dictStatus(wantedDicts, currentLemma)}
    </Typography>
  );
};

export default StatusBar;
