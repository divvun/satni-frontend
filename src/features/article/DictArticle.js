import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import { hasAvailableDict } from 'utils';
import Examples from './Examples';
import Source from './Source';
import DictTargetStem from './DictTargetStem';
import Stem from './Stem';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1)
  },
}));

const DictArticle = ({dictGroup, lemma}) => {
  const classes = useStyles();
  const {dict, from, to} = dictGroup;
  const pathname = useLocation().pathname;

  return (
    <>
      {to.translationGroups.map((translationGroup, i) => {
        return (
          <React.Fragment key={i}>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                {translationGroup.translations.map((stem, index) => {
                  if (stem.lemma.includes(' ')) {
                    return <Stem
                      key={index}
                      stem={stem}
                      restriction={translationGroup.restriction} />;
                  } else {
                    return <DictTargetStem
                      key={index}
                      stem={stem}
                      restriction={translationGroup.restriction}
                    />;
                  }
                })}
              </Grid>
              {translationGroup.examples &&
                <Grid
                  item
                  xs={12}>
                  <Examples examples={translationGroup.examples}/>
                </Grid>
              }
            </Grid>
          </React.Fragment>
        );
      })}
      {!hasAvailableDict(pathname) && <Source
        className={classes.paper}
        source={dict}
        lemma={lemma} />
      }
    </>
  );
};

export default DictArticle;
