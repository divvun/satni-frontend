import React, { useEffect } from 'react';
import {
  useParams
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from './articleSlice';
import PresentArticles from './PresentArticles';
import FetchArticlesError from './FetchArticlesError';

const Articles = () => {
  const { lemma } = useParams();
  const articles = useSelector(state => state['articles']);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(lemma));
  }, [dispatch, lemma]);

  if (articles.error) {
    if (articles.error === 'Error: text is null!') {
      return <div>The word «{lemma}» is not in the database.</div>;
    } else {
      return <FetchArticlesError message={articles.error} />;
    }
  }

  if (articles.isFetching) {
    return <div>Loading articles …</div>;
  }

  if (articles[lemma] && articles[lemma].length > 0) {
    return <PresentArticles articles={articles[lemma]} />;
  } else {
    return <div>No results found for {lemma} empty array {articles.isFetching}</div>;
  }
};

export default Articles;
