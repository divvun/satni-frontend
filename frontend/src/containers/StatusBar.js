import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { availableDicts, availableLanguages } from 'utils';

const useStyles = makeStyles(theme => ({
  status: {
    textAlign: 'center'
  }
}));

const dictStatus = (wantedDicts) => {
  if (wantedDicts.length === 1) {
    return <>
      <Trans>Results only from</Trans> <Trans id={wantedDicts[0]} /> <Trans>(<Link to='/'>Show all</Link>)</Trans>
    </>;
  }

  if (wantedDicts.length === availableDicts.length) {
    return <Trans>All {availableDicts.length} sources</Trans>;
  }

  return <Trans>{wantedDicts.length}/{availableDicts.length} sources.</Trans>;
};

const langStatus = (wantedDicts, wantedLangs) => {
  if (wantedDicts.length > 1 || wantedDicts.includes('termwiki')) {
    if (wantedLangs.length === availableLanguages.length) {
      return <Trans>All {availableLanguages.length} langauges.</Trans>;
    }

    return <Trans>{wantedLangs.length}/{availableLanguages.length} languages.</Trans>;
  }
  
  return null;
};

const StatusBar = (props) => {
  const {wantedDicts, wantedLangs} = props;
  const classes = useStyles();

  return (
    <Typography className={classes.status}>
      {langStatus(wantedDicts, wantedLangs)} {dictStatus(wantedDicts)}
    </Typography>
  );
};

export default StatusBar;
