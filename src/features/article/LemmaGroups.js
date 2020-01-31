import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import LemmaGroup from './LemmaGroup';

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

const LemmaGroups = ({lemmaGroups}) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container spacing={2}>
        {lemmaGroups.map(lemmaGroup =>
          <Grid item xs={6}>
            <LemmaGroup stem={lemmaGroup.stem} paradigm={lemmaGroup.paradigm} />
          </Grid>)
        }
      </Grid>
    </Grid>
  );
};

export default LemmaGroups;
