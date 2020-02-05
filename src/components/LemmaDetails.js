import React from 'react';
import qs from 'qs';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Korp from 'features/korp/Korp';
import Paradigm from 'features/paradigm/Paradigm';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1)
  }
}));

const LemmaDetails = ({match, location}) => {
  const location_dict = qs.parse(location.search.slice(1));
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Korp lemma={location_dict.lemma} language={location_dict.lang} />
      <Paradigm lemma={location_dict.lemma} language={location_dict.lang} pos={location_dict.pos} />
    </Paper>
  );
};

export default LemmaDetails;
