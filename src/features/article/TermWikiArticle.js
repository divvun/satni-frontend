import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import { hasAvailableDict } from 'utils';
import Definitions from './Definitions';
import LemmaGroups from './LemmaGroups';
import Source from './Source';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1)
  },
  title: {
    fontSize: 14
  }
}));

const TermWikiArticle = ({termGroup, lemma}) => {
  const classes = useStyles();
  const pathname = useLocation().pathname;

  return (
    <>
      <LemmaGroups
        fromterms={termGroup.from.terms}
        toterms={termGroup.to.terms} />
      {(termGroup.from.definition || termGroup.to.definition) && <Definitions definitions={[termGroup.from.definition, termGroup.to.definition]}/>}
      {!hasAvailableDict(pathname) && <Source
        className={classes.paper}
        source='termwiki'
        lemma={lemma}/>
      }
    </>
  );
};

export default TermWikiArticle;
