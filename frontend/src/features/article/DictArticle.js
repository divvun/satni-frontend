import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
    <>
      <LemmaGroups stems={stems} />
      {examples.length > 0 && (<Examples examples={examples} />)}
      <Source className={classes.paper} source={dict} lemma={stems[0].lemma} />
    </>
  );
};

export default DictArticle;
