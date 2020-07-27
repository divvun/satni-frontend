import React from 'react';
import Grid from '@material-ui/core/Grid';
import LemmaGroup from './LemmaGroup';

const LemmaGroups = ({ fromterms, toterms }) => (
  <Grid container spacing={1}>
    <Grid item xs={6}>
      {fromterms.map((fromterm, index) => <LemmaGroup
        key={index}
        term={fromterm} />)}
    </Grid>
    <Grid item xs={6}>
      {toterms.map((toterm, index) => <LemmaGroup
        key={index}
        term={toterm}
        withLink />)}
    </Grid>
  </Grid>
);

export default LemmaGroups;
