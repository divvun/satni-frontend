import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import LemmaGroup from './LemmaGroup';
import Examples from './Examples'
import Source from './Source'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1)
  }
}));

const DictArticle = ({dictGroup}) => {
  const classes = useStyles();
  const {dict, from, to} = dictGroup
  return (
    <>
      {from.lookupLemmas.map((lemma, i) => <LemmaGroup key={i} stem={lemma}/>)}
      {to.translationGroups.map((translationGroup, i) => {
        return (
          <React.Fragment key={i}>
            {translationGroup.translations.map((lemma, j) => <LemmaGroup key={j} stem={lemma}/>)}
            {translationGroup.examples && <Examples examples={translationGroup.examples}/>}
          </React.Fragment>
        )
      })}
      <Source className={classes.paper} source={dict} lemma={dictGroup.from.lookupLemmas[0].lemma} />
    </>
  );
};

export default DictArticle;
