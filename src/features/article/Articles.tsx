// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from '@lingui/react/macro';
import { } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { useLocation } from 'react-router-dom';

import { locationParser } from '../../utils';
import DictArticles from './DictArticles';
import TermArticles from './TermArticles';

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

interface ArticlesProps {
  lemma: string;
}

const Articles: React.FC<ArticlesProps> = ({ lemma }) => {
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

export default Articles;
