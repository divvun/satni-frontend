/* eslint-disable react/no-array-index-key */

import React from 'react';
import Box from '@mui/material/Box';
import { } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

import LemmaGroup from './LemmaGroup';

const useStyles = makeStyles((theme) => ({
  divisor: {
    margin: theme.spacing(1),
  },
}));

interface LemmaGroupsProps {
  lemma: string;
  terms: any[];
}

const LemmaGroups: React.FC<LemmaGroupsProps> = ({ lemma, terms }) => {
  const classes = useStyles();

  return (
    <Box className={classes.divisor}>
      {terms.map((term, index) => (
        <LemmaGroup key={index} lemma={lemma} term={term} />
      ))}
    </Box>
  );
};

export default LemmaGroups;
