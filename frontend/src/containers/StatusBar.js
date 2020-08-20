import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

import { availableDicts } from 'utils';

const useStyles = makeStyles(theme => ({
  status: {
    textAlign: 'center'
  }
}));

const status = (wantedDicts) => {
  if (wantedDicts.length === 1) {
    return <Typography>
      <Trans>Results only from</Trans> <Trans id={wantedDicts[0]} /> <Trans>(<Link to='/'>Show all</Link>)</Trans>
    </Typography>;
  }

  if (wantedDicts.length === availableDicts.length) {
    return <Typography>
      <Trans>Results from all {availableDicts.length} sources</Trans>
    </Typography>;
  }

  return <Typography>
    <Trans>Results from {wantedDicts.length} of {availableDicts.length} sources (<Link to='/'>Show all</Link>)</Trans>
  </Typography>;
};

const StatusBar = (props) => {
  const {wantedDicts} = props;
  const classes = useStyles();

  return (
    <div className={classes.status}>
      {status(wantedDicts)}
    </div>
  );
};

export default StatusBar;
