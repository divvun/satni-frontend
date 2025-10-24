/* eslint-disable react/no-array-index-key */

import React from 'react';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useLocation } from 'react-router-dom';

import { hasAvailableDict, type DictArticle as DictGroup } from '../../utils';
import DictTargetStem from './DictTargetStem';
import Examples from './Examples';
import Source from './Source';
import Stem from './Stem';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  translations: {
    marginLeft: theme.spacing(2),
  },
}));

interface DictArticleProps {
  lemma: string;
  dictGroup: DictGroup;
}

const DictArticle: React.FC<DictArticleProps> = ({ dictGroup, lemma }) => {
  const classes = useStyles();
  const { dict, from, to } = dictGroup;
  const { pathname } = useLocation();

  return (
    <Paper className={classes.paper} elevation={1}>
      <Grid container spacing={1}>
        <Grid size={12}>
          {!hasAvailableDict(pathname) && (
            <Source source={dict} lemma={lemma} />
          )}
          <Divider />
        </Grid>
        <Grid size={12}>
          {from.lookupLemmas.map((lookupLemma) =>
            lookupLemma.lemma === lemma ? (
              <Stem key={lookupLemma.lemma} stem={lookupLemma} />
            ) : (
              <DictTargetStem key={lookupLemma.lemma} stem={lookupLemma} />
            ),
          )}
        </Grid>
        <Grid size={12} className={classes.translations}>
          {to.translationGroups.map((translationGroup, i) => (
            <React.Fragment key={i}>
              {translationGroup.translations.map((stem, index) => (
                <DictTargetStem
                  key={index}
                  stem={stem}
                  restriction={translationGroup.restriction}
                />
              ))}
              {translationGroup.examples && (
                <Examples
                  examples={translationGroup.examples as any}
                  sourceLanguage={from.language}
                  targetLanguage={to.language}
                />
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DictArticle;