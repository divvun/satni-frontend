import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Examples from './Examples';
import LemmaGroups from './LemmaGroups';
import Source from './Source';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1)
  }
}));

const DictArticle = ({dictGroup}) => {
  const classes = useStyles();
  const { stems, examples, dict } = dictGroup;

  return (
    <Paper className={classes.paper}>
      <LemmaGroups stems={stems} />
      {examples.length > 0 && (<Examples examples={examples} />)}
      <Source source={dict} lemma={stems[0].lemma} />
    </Paper>
  );
};

export default DictArticle;
