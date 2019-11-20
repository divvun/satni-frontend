import * as Sentry from '@sentry/browser';
import fetch from 'cross-fetch';
import {normaliseArticles, toJson} from './utils';

export const FETCH_PARADIGM_REQUEST = 'FETCH_PARADIGM_REQUEST';
export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const SELECT_KEY = 'SELECT_KEY';

export const FETCH_PARADIGM_SUCCESS = 'FETCH_PARADIGM_SUCCESS';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export const selectKey = (key) => ({
  type: SELECT_KEY,
  key
});

export const requestArticles = (lemma) => ({
  type: FETCH_ARTICLES_REQUEST,
  lemma
});

export const requestItems = (key) => ({
  type: REQUEST_ITEMS
});

export const requestParadigm = (stem) => ({
  type: FETCH_PARADIGM_REQUEST,
  stem
});

export const receiveArticles = (lemma, json) => ({
  type: FETCH_ARTICLES_SUCCESS,
  lemma,
  articles: json
});

export const receiveItems = (key, json) => ({
  type: RECEIVE_ITEMS,
  key,
  searchItems: json
});

export const receiveParadigm = (stem, json) => ({
  type: FETCH_PARADIGM_SUCCESS,
  stem,
  paradigm: json
});

const apifetchArticle = (lemma) => {
  let url = `https://satni.uit.no/satnibackend/article/${lemma}`;
  return fetch(encodeURI(url));
};

export const fetchArticles = (lemma) => (dispatch) => {
  dispatch(requestArticles(lemma));

  return apifetchArticle(lemma)
    .then(response => response.text())
    .then(text => {
      return dispatch(receiveArticles(lemma, normaliseArticles(toJson(text))));
    })
    .catch(error => {
      Sentry.captureException(lemma);
      Sentry.captureException(error);
      dispatch({
        type: FETCH_ARTICLES_ERROR,
        message: lemma
      });
    });
};

const fetchItems = (key) => (dispatch) => {
  dispatch(requestItems(key));

  let url = `https://satni.uit.no/satnibackend/search?query=${key}`;
  return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveItems(key, toJson(text))));
};

export const fetchParadigm = (stem) => (dispatch) => {
  dispatch(requestParadigm(stem));

  let url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?json=true&text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.lang}`;
  console.log(encodeURI(url));
  return fetch(encodeURI(url, {credentials: 'same-origin', mode: 'no-cors'}))
      .then(response => response.json())
      .then(json => dispatch(receiveParadigm(stem, json)));
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

export const shouldFetchItems = (state, key) => {
  if (state.usedSearchKeys.has(key)) {
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

export const shouldFetchParadigm = (state, key) => {
  const paradigm = state.paradigm;
  if (paradigm.has(key)) {
    return false;
  } else {
    return true;
  }
};

export const fetchParadigmIfNeeded = (stem) => (dispatch, getState) => {
  if (shouldFetchParadigm(getState(), `${stem.lemma}_${stem.pos}_${stem.lang}`)) {
    return dispatch(fetchParadigm(stem));
  }
};

export const fetchItemsIfNeeded = (key) => (dispatch, getState) => {
  if (shouldFetchItems(getState().search, key)) {
    return dispatch(fetchItems(key));
  }
};
