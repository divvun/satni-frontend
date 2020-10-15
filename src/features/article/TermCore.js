import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Definitions from './Definitions';
import LemmaGroups from './LemmaGroups';
import PairHeader from './PairHeader';

const TermCore = ({ concept, lemma }) => {
  const { definition, terms } = concept;

  return (
    <Grid container>
      <Grid
        sm={3}
        xs={12}
        item>
        <PairHeader language={terms[0].expression.language} />
      </Grid>
      <Grid
        sm={4}
        xs={12}
        item>
        <LemmaGroups
          lemma={lemma}
          terms={terms}
        />
      </Grid>
      <Grid
        sm={5}
        xs={12}
        item>
        {definition && <Definitions definitions={definition} />}
      </Grid>
    </Grid>
  );
};

TermCore.propTypes = {
  concept: PropTypes.object.isRequired,
  lemma: PropTypes.string.isRequired
};

export default TermCore;
