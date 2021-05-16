import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DictArticles from './DictArticles';
import TermArticles from './TermArticles';

const useStyles = makeStyles((theme) => ({
  articles: {
    height: '80vh',
    overflowY: 'auto',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));

const Articles = ({ lemma }) => {
  const classes = useStyles();

  return (
    <div className={classes.articles}>
      <DictArticles lemma={lemma} />
      <TermArticles lemma={lemma} />
    </div>
  );
};

Articles.propTypes = {
  lemma: PropTypes.string.isRequired,
};

export default Articles;
