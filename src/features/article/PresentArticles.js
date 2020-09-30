import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

import { multilingualconceptListsByNames, dictBackend2Frontend } from 'utils';
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

// {Object.keys(articlesMappedByLanguagePair).map((langpair, index) => {

const Articles = ({data, lemma}) => {
  const classes = useStyles();
  const { dictList, conceptList } = data;
  const termsByNames = multilingualconceptListsByNames(conceptList);
  return (
    <div className={classes.articles}>
      {Object.keys(termsByNames).map((name, index) => (
        <TermWikiArticle
          category={name}
          concepts={termsByNames[name]} />
      ))}
    </div>
  );
};

export default Articles;
