import React from 'react';
import Grid from '@material-ui/core/Grid';
import LemmaGroup from './LemmaGroup';

const LemmaGroups = ({ fromterms, toterms, lemmaHandler }) => (
  <Grid container spacing={1}>
    <Grid item xs={6}>
      {fromterms.map((fromterm, index) => <LemmaGroup
        key={index}
        lemmaHandler={lemmaHandler}
        term={fromterm} />)}
    </Grid>
    <Grid item xs={6}>
      {toterms.map((toterm, index) => <LemmaGroup
        key={index}
        term={toterm}
        lemmaHandler={lemmaHandler}
        withLink />)}
    </Grid>
  </Grid>
);

export default LemmaGroups;
