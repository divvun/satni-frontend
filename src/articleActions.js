import * as Sentry from '@sentry/browser';
import fetch from 'cross-fetch';
import {handleErrors, normaliseArticles, toJson} from './utils';

export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export const requestArticles = (lemma) => ({
  type: FETCH_ARTICLES_REQUEST,
  lemma
});

export const receiveArticles = (lemma, json) => ({
  type: FETCH_ARTICLES_SUCCESS,
  lemma,
  articles: json
});

const apifetchArticle = (lemma) => {
  let url = `https://satni.uit.no/satnibackend/article/${lemma}`;
  return fetch(encodeURI(url));
};

export const fetchArticles = (lemma) => (dispatch) => {
  dispatch(requestArticles(lemma));

  return apifetchArticle(lemma)
    .then(handleErrors)
    .then(response => response.text())
    .then(text => {
      return dispatch(receiveArticles(lemma, normaliseArticles(toJson(text))));
    })
    .catch(error => {
      Sentry.captureException(lemma);
      Sentry.captureException(error);
      dispatch({
        type: FETCH_ARTICLES_ERROR,
        message: `Could not show articles for «${lemma}»`
      });
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

