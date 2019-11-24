import React, { useEffect } from 'react';
import {
  useRouteMatch,
  useParams
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticlesIfNeeded } from '../articleActions';
import PresentArticles from './PresentArticles';
import FetchArticlesError from './FetchArticlesError';

const Articles = () => {
  const { lemma } = useParams();
  const articlesByLemma = useSelector(state => state['articlesByLemma']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesIfNeeded(lemma));
  });

  if (articlesByLemma.errorMessage) {
    if (articlesByLemma.errorMessage.message === 'text is null!') {
      return <div>No results found for {lemma} errorMessase</div>;
    } else {
      return <FetchArticlesError message={articlesByLemma.errorMessage.message} />;
    }
  }

  if (articlesByLemma.isFetching) {
    return <div>Loading articles …</div>;
  }

  if (articlesByLemma[lemma] && articlesByLemma[lemma].length > 0) {
    return <PresentArticles articles={articlesByLemma[lemma]} />;
  } else {
    return <div>No results found for {lemma} empty array {articlesByLemma.isFetching}</div>;
  }
};

export default Articles;
