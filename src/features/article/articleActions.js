import * as Sentry from '@sentry/browser';
import {handleErrors, normaliseArticles, toJson} from 'utils';
import {apifetchArticle} from 'api';

export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const fetchArticlesBegin = (lemma) => ({
  type: FETCH_ARTICLES_BEGIN,
  payload: {lemma}
});

export const fetchArticlesSuccess = (lemma, json) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: { lemma, articles: json}
});

export const fetchArticleFailure = (lemma, error) => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: {lemma, error}
});

export const fetchArticles = (lemma) => (dispatch) => {
  dispatch(fetchArticlesBegin(lemma));

  return apifetchArticle(lemma)
    .then(handleErrors)
    .then(response => response.text())
    .then(text => {
      return dispatch(fetchArticlesSuccess(lemma, normaliseArticles(toJson(text))));
    })
    .catch(error => {
      if (process.env.NODE_ENV !== 'development') {
        Sentry.captureException(lemma);
        Sentry.captureException(error);
      }
      dispatch(fetchArticleFailure(lemma, error));
    });
};

export const shouldFetchArticles = (state, lemma) => {
  const articlesByLemma = state.articlesByLemma;
  const articles = articlesByLemma[lemma];
  if (!lemma ||
    (articlesByLemma.isFetching) ||
    (articles && !state.isFetching)) {
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
