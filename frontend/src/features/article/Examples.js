import React from 'react';
import Grid from '@material-ui/core/Grid';

import Example from './Example';

const Examples = ({examples}) => (
  <Grid container item xs={12}>
    {examples.map((example, i) => (
      <Example key={i} example={example} />)
    )}
  </Grid>
);

export default Examples;
