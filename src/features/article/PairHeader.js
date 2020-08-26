import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  lang1: {
    marginRight: theme.spacing(1)
  },
  lang2: {
    marginLeft: theme.spacing(1)
  }
}));

const PairHeader = ({langpair}) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={5}>
        <Typography
          component='h3'
          align='right'
          className={classes.lang1}><Trans id={langpair.slice(0, 3)} /></Typography>
      </Grid>
      <Grid item><Typography component='h3'>⟹</Typography></Grid>
      <Grid item xs={5}>
        <Typography
          component='h3'
          align='left'
          className={classes.lang2}><Trans id={langpair.slice(3)} /></Typography>
      </Grid>
    </Grid>
  );
};

export default PairHeader;
