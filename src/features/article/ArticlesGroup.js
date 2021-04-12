import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Articles from './Articles';
import PropTypes from 'prop-types';
import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const LEMMAS = gql`
  query lemmas($stem: String!) {
    lemmas (lookupString: $stem)
  }
`;

const useStyles = makeStyles(theme => ({
  articles: {
    height: '80vh',
    overflowY: 'auto',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  }
}));

const ArticlesGroup = ({lemmas, wantedDicts, wantedLangs}) => {
  const {data, error, loading} = useQuery(
    LEMMAS, {
      variables: {
        stem: lemmas
      }
    }
  );

  const classes = useStyles();

  if (loading) return <div>waiting</div>;
  if (error) return <div>error</div>;
  return <div className={classes.articles}>
    {data.lemmas.map(lemma => <Articles
      key={lemma}
      lemma={lemma}
      wantedDicts={wantedDicts}
      wantedLangs={wantedLangs}/>
    )}
  </div>;
};

ArticlesGroup.propTypes = {
  lemmas: PropTypes.string.isRequired,
  wantedDicts: PropTypes.array.isRequired,
  wantedLangs: PropTypes.array.isRequired
};

export default ArticlesGroup;
