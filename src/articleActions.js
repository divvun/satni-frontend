import * as Sentry from '@sentry/browser';
import fetch from 'cross-fetch';
import {handleErrors, normaliseArticles, toJson} from './utils';

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesBegin = (lemma) => ({
  type: FETCH_ARTICLES_BEGIN,
  payload: {lemma}
});

export const fetchArticlesSucces = (lemma, json) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { lemma, articles: json}
});

export const fetchArticleFailure = (lemma, error) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: {lemma, error}
});

const apifetchArticle = (lemma) => {
  let url = `https://satni.uit.no/satnibackend/article/${lemma}`;
  return fetch(encodeURI(url));
};

export const fetchArticles = (lemma) => (dispatch) => {
  dispatch(fetchArticlesBegin(lemma));

  return apifetchArticle(lemma)
    .then(handleErrors)
    .then(response => response.text())
    .then(text => {
      return dispatch(fetchArticlesSucces(lemma, normaliseArticles(toJson(text))));
    })
    .catch(error => {
      Sentry.captureException(lemma);
      Sentry.captureException(error);
      dispatch(fetchArticleFailure(lemma, error));
    });
};

export const shouldFetchArticles = (state, lemma) => {
  const articles = state.articlesByLemma[lemma];
  if (!lemma ||
    (articles && articles.isFetching) ||
    (articles && !articles.isFetching && articles.items)) {
    return false;
  } else {
    return true;
  }
};

export const fetchArticlesIfNeeded = (lemma) => (dispatch, getState) => {
  if (shouldFetchArticles(getState(), lemma)) {
    return dispatch(fetchArticles(lemma));
  }
};

