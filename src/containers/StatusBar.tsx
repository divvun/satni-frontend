import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
import { makeStyles, Theme } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@material-ui/core/Typography';
// @ts-ignore - React Router DOM v5 compatibility
import { Link, useLocation } from 'react-router-dom';
import GET_LANGS_DICTS from '../operations/queries/getLangsDicts';
import dictionaryInfo from '../translateble_variables';
import { availableLanguages, locationParser } from '../utils';

interface LangsDictsQueryData {
  srcLangs: string[];
  wantedDicts: string[];
}

const StatusBar: React.FC = () => {
  const useStyles = makeStyles((theme: Theme) => ({
    status: {
      textAlign: 'center',
      margin: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const location = useLocation();
  const { currentDict, currentLemma } = locationParser(location.pathname);
  const langsDictsQueryResult = useQuery<LangsDictsQueryData>(GET_LANGS_DICTS);
  const { srcLangs } = langsDictsQueryResult.data || { srcLangs: [] };

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data?.wantedDicts || [];

  const dictStatus = (wantedDicts: string[], currentLemma: string) => {
    if (wantedDicts.length === 1) {
      return (
        <>
          <Trans>Results only from</Trans> <Trans id={wantedDicts[0]} />{' '}
          <Trans>
            {/* @ts-ignore - React Router DOM v5 compatibility */}(
            <Link to={`/${currentLemma}`}>Show all</Link>)
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

  const langStatus = (wantedDicts: string[], srcLangs: string[]) => {
    if (wantedDicts.length > 1 || wantedDicts.includes('termwiki')) {
      return (
        <Trans>
          {srcLangs.length}/{availableLanguages.length} languages.
        </Trans>
      );
    }

    return null;
  };

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Typography className={classes.status}>
      {langStatus(wantedDicts, srcLangs)}{' '}
      {dictStatus(wantedDicts, currentLemma)}
    </Typography>
  );
};

export default StatusBar;
