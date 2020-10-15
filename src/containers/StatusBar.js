import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import { availableDicts, availableLanguages } from 'utils';

const useStyles = makeStyles(theme => ({
  status: {
    textAlign: 'center',
    margin: theme.spacing(1)
  }
}));

const dictStatus = (wantedDicts, currentLemma) => {
  if (wantedDicts.length === 1) {
    return <>
      <Trans>Results only from</Trans> <Trans id={wantedDicts[0]} /> <Trans>(<Link to={`/${currentLemma}`}>Show all</Link>)</Trans>
    </>;
  }

  return <Trans>{wantedDicts.length}/{availableDicts.length} sources.</Trans>;
};

const langStatus = (wantedDicts, wantedLangs) => {
  if (wantedDicts.length > 1 || wantedDicts.includes('termwiki')) {
    return <Trans>{wantedLangs.length}/{availableLanguages.length} languages.</Trans>;
  }
  
  return null;
};

const StatusBar = ({ wantedDicts, wantedLangs, currentLemma }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.status}>
      {langStatus(wantedDicts, wantedLangs)} {dictStatus(wantedDicts, currentLemma)}
    </Typography>
  );
};

StatusBar.propTypes = {
  wantedLangs: PropTypes.array.isRequired,
  wantedDicts: PropTypes.array.isRequired,
  currentLemma: PropTypes.string.isRequired
};

export default StatusBar;
