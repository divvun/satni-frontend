/* eslint-disable react/no-array-index-key */

import React from 'react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Box from '@material-ui/core/Box';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import { makeStyles } from '@material-ui/core/styles';

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
    // @ts-ignore - Material-UI v4 compatibility
    <Box className={classes.divisor}>
      {terms.map((term, index) => (
        <LemmaGroup key={index} lemma={lemma} term={term} />
      ))}
    </Box>
  );
};

export default LemmaGroups;
