import React from 'react';
import { useLocation } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import DictArticles from './DictArticles';
import TermArticles from './TermArticles';
import { locationParser } from '../../utils';

const useStyles = makeStyles((theme) => ({
  articles: {
    height: '72vh',
    overflowY: 'auto',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
  status: {
    textAlign: 'center',
  },
}));

const Articles = ({ lemma }) => {
  const classes = useStyles();
  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  return (
    <div>
      <Typography className={classes.status}>
        <Trans>Results for «{lemma}»</Trans>
      </Typography>
      <div className={classes.articles}>
        {(!currentDict || currentDict === 'termwiki') && (
          <TermArticles lemma={lemma} />
        )}
        <DictArticles lemma={lemma} />
      </div>
    </div>
  );
};

Articles.propTypes = {
  lemma: PropTypes.string.isRequired,
};

export default Articles;
