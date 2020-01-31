import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import LemmaGroups from './LemmaGroups';

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

  return (
    <Paper className={classes.paper}>
      <LemmaGroups lemmaGroups={termGroup.lemmaGroups} />
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            Category:
            <Link href={`https://satni.uit.no/termwiki/index.php?title=Kategoriija:${termGroup.category}`}
              target='_blank' rel='noopener noreferrer'>
              {termGroup.category}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            Source:
            <Link
              href={`https://satni.uit.no/termwiki/index.php?title=${termGroup.termwikiref}`}
              target='_blank' rel='noopener noreferrer'>
              TermWiki
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TermWikiArticle;
