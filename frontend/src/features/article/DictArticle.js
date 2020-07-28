import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Examples from './Examples';
import Source from './Source';
import DictTargetStem from './DictTargetStem';
import Stem from './Stem';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(1)
  }
}));

const DictArticle = ({dictGroup}) => {
  const classes = useStyles();
  const {dict, from, to} = dictGroup;
  return (
    <>
      {to.translationGroups.map((translationGroup, i) => {
        return (
          <React.Fragment key={i}>
            <Grid container spacing={1}>
              <Grid item xs={6}>
                {from.lookupLemmas.map((stem, index) =>
                  <Stem key={index} stem={stem} />)
                }
              </Grid>
              <Grid item xs={6}>
                {translationGroup.translations.map((stem, index) => {
                  if (stem.lemma.includes(' ')) {
                    return <Stem
                      stem={stem}
                      restriction={translationGroup.restriction} />;
                  } else {
                    return <DictTargetStem
                      key={index}
                      stem={stem}
                      restriction={translationGroup.restriction}/>;
                  }
                })}
              </Grid>
            </Grid>
            {translationGroup.examples &&
              <Examples examples={translationGroup.examples}/>
            }
          </React.Fragment>
        );
      })}
      <Source
        className={classes.paper}
        source={dict}
        lemma={dictGroup.from.lookupLemmas[0].lemma} />
    </>
  );
};

export default DictArticle;
