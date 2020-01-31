import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  second: {
    fontStyle: 'italic'
  }
});

const Example = ({example}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>{example.x}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography className={classes.second}>{example.xt}</Typography>
      </Grid>
    </Grid>
  );
};

export default Example;
