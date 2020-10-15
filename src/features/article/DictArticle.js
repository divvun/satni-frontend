import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';

import { hasAvailableDict } from 'utils';
import DictTargetStem from './DictTargetStem';
import Examples from './Examples';
import Source from './Source';
import Stem from './Stem';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1)
  },
  translations: {
    marginLeft: theme.spacing(2)
  }
}));

const DictArticle = ({dictGroup, lemma}) => {
  const classes = useStyles();
  const {dict, from, to} = dictGroup;
  const pathname = useLocation().pathname;

  return (
    <Paper
      className={classes.paper}
      elevation={1}
    >
      <Grid container spacing={1}>
        <Grid
          item
          xs={12}
        >
          {!hasAvailableDict(pathname) && <Source
            source={dict}
            lemma={lemma} />
          }
          <Divider />
        </Grid>
        <Grid
          item
          xs={12}
        >
          {from.lookupLemmas.map((lookupLemma, i) => (
            (lookupLemma.lemma === lemma) ?
              <Stem key={i} stem={lookupLemma} /> :
              <DictTargetStem key={i} stem={lookupLemma} />
          ))}
        </Grid>
        <Grid
          item
          xs={12}
          className={classes.translations}
        >
          {to.translationGroups.map((translationGroup, i) => {
            return (
              <React.Fragment
                key={i}
              >
                {translationGroup.translations.map((stem, index) => (
                  <DictTargetStem
                    key={index}
                    stem={stem}
                    restriction={translationGroup.restriction}
                  />
                ))}
                {translationGroup.examples &&
                <Examples examples={translationGroup.examples} />
                }
              </React.Fragment>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};

DictArticle.propTypes = {
  lemma: PropTypes.string.isRequired,
  dictGroup: PropTypes.object.isRequired
};

export default DictArticle;
