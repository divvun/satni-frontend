import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Example from './Example';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 14
  }
}));

const Examples = ({examples}) => {
  const classes = useStyles();

  return (
    <Grid container xs={12}>
      <Typography className={classes.title} color='textSecondary' gutterBottom>
        Examples
      </Typography>
      {examples.map((example, i) => (
        <Example key={i} example={example} />)
      )}
    </Grid>
  );
};

export default Examples;
