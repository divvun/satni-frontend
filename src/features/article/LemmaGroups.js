import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import LemmaGroup from './LemmaGroup';

const useStyles = makeStyles(theme => ({
  divisor: {
    margin: theme.spacing(1)
  }
}));

const LemmaGroups = ({ lemma, terms }) => {
  const classes = useStyles();

  return (
    <Box className={classes.divisor}>
      {terms.map((term, index) => <LemmaGroup
        key={index}
        lemma={lemma}
        term={term} />)}
    </Box>
  );
};

export default LemmaGroups;
