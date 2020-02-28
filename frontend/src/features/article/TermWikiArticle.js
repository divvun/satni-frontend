import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import LemmaGroups from './LemmaGroups';

const CategoryLink = ({category}) => {
  return <Grid item xs={12}>
    <Typography>
      Category:
      <Link href={`https://satni.uit.no/termwiki/index.php?title=Kategoriija:${category}`}
        target='_blank' rel='noopener noreferrer'>
        {category}
      </Link>
    </Typography>
  </Grid>;
};

const SourceLink = ({termwikiref}) => (
  <Grid item xs={12}>
    <Typography>
      Source:
      <Link
        href={`https://satni.uit.no/termwiki/index.php?title=${termwikiref}`}
        target='_blank' rel='noopener noreferrer'>
        TermWiki
      </Link>
    </Typography>
  </Grid>
);

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

const TermWikiArticle = ({termGroup}) => {
  const classes = useStyles();
  const { stems, category, termwikiref } = termGroup;

  console.log(category, termwikiref);
  return (
    <>
      <LemmaGroups stems={stems} />
      <Grid container>
        <Grid item className={classes.paper}>
          <SourceLink termwikiref={termwikiref} />
        </Grid>
        <Grid item className={classes.paper}>
          <CategoryLink category={category} />
        </Grid>
      </Grid>
    </>
  );
};

export default TermWikiArticle;
