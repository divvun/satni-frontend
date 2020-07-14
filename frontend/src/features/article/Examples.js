import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Example from './Example';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 12
  }
}));

const Examples = ({examples}) => {
  const classes = useStyles();

  return (
    <Grid container item xs={12}>
      {examples.map((example, i) => (
        <Example key={i} example={example} />)
      )}
    </Grid>
  );
};

export default Examples;
