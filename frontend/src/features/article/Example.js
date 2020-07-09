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
    <Grid container spacing={2}>
      <Grid item>
        <Typography>{example.example}</Typography>
        <Typography className={classes.second}>{example.translation}</Typography>
      </Grid>
    </Grid>
  );
};

export default Example;
