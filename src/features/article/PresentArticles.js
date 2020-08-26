import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

import { mapArticlesByLanguagePair } from 'utils';
import DictArticle from './DictArticle';
import PairHeader from './PairHeader';
import TermWikiArticle from './TermWikiArticle';

const useStyles = makeStyles(theme => ({
  articles: {
    height: '80vh',
    overflowY: 'auto',
    paddingRight: theme.spacing(2)
  },
  list: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(2)
  }
}));

const Articles = ({articles, lemma}) => {
  const articlesMappedByLanguagePair = mapArticlesByLanguagePair(articles);
  const classes = useStyles();

  return (
    <div className={classes.articles}>
      {Object.keys(articlesMappedByLanguagePair).map((langpair, index) => {
        return (
          <Paper key={index} className={classes.list}>
            <List>
              <ListItem>
                <PairHeader
                  langpair={langpair}
                />
              </ListItem>
              {articlesMappedByLanguagePair[langpair].map((article, index) => {
                if (article.dict === 'termwiki') {
                  return (
                    <ListItem key={index}>
                      <Grid container>
                        <TermWikiArticle
                          lemma={lemma}
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
                          lemma={lemma} />
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
