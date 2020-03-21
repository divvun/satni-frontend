import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Stem from './Stem';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1)
  },
  title: {
    fontSize: 14
  }
}));

const LemmaGroups = ({ from, to }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        {from.map(stem =>
          <Stem stem={stem} />)
      }
      </Grid>
      <Grid item xs={6}>
        {to.map(stem =>
          <Stem stem={stem} />)
        }
      </Grid>
    </Grid>
  );
};

export default LemmaGroups;
