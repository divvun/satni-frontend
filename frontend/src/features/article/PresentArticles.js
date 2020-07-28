import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { mapArticlesByLanguagePair } from 'utils';
import DictArticle from './DictArticle';
import TermWikiArticle from './TermWikiArticle';
import { langName } from 'langThings';

const useStyles = makeStyles(theme => ({
  list: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  lang1: {
    marginRight: theme.spacing(2)
  },
  lang2: {
    marginLeft: theme.spacing(2)
  }
}));

const Articles = ({articles, lemmaHandler}) => {
  const articlesMappedByLanguagePair = mapArticlesByLanguagePair(articles);
  const classes = useStyles();

  return (
    <div style={{height: '80vh', overflowY: 'auto'}}>
      {Object.keys(articlesMappedByLanguagePair).map((langpair, index) => {
        return (
          <Paper key={index} className={classes.list}>
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={5}>
                    <Typography
                      variant='h5'
                      component='h3'
                      align='right'
                      className={classes.lang1}>{langName[langpair.slice(0, 3)]}</Typography>
                  </Grid>
                  <Grid item><Typography variant='h5' component='h3'>⟹</Typography></Grid>
                  <Grid item xs={5}>
                    <Typography variant='h5'
                      component='h3'
                      align='left'
                      className={classes.lang2}>{langName[langpair.slice(3)]}</Typography>
                  </Grid>
                </Grid>
              </ListItem>
              {articlesMappedByLanguagePair[langpair].map((article, index) => {
                if (article.dict === 'termwiki') {
                  return (
                    <ListItem key={index}>
                      <Grid container>
                        <TermWikiArticle
                          lemmaHandler={lemmaHandler}
                          termGroup={article} />
                      </Grid>
                    </ListItem>
                  );
                } else {
                  return (
                    <ListItem key={index}>
                      <Grid container>
                        <DictArticle
                          dictGroup={article}
                          lemmaHandler={lemmaHandler} />
                        <Divider />
                      </Grid>
                    </ListItem>
                  );
                }
              })}
            </List>
          </Paper>
        );
      })}
    </div>
  );
};

export default Articles;
