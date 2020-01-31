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

const DictArticle = ({lemmaGroups, examples, dictionary}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <LemmaGroups lemmaGroups={lemmaGroups} />
      {examples.length > 0 && (<Examples examples={examples} />)}
      <Source source={dictionary} lemma={lemmaGroups[0].stem.lemma} />
    </Paper>
  );
};

export default DictArticle;
