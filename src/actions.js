import fetch from 'cross-fetch';
import {normaliseArticles, toJson} from './utils';

export const REQUEST_PARADIGM = 'REQUEST_PARADIGM';
export const FETCH_ARTICLES_REQUEST = 'FETCH_ARTICLES_REQUEST';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const SELECT_LEMMA = 'SELECT_LEMMA';
export const SELECT_KEY = 'SELECT_KEY';

export const RECEIVE_PARADIGM = 'RECEIVE_PARADIGM';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const selectLemma = (lemma) => ({
  type: SELECT_LEMMA,
  lemma
});

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
  type: REQUEST_PARADIGM,
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

export const receiveParadigm = (stem, text) => ({
  type: RECEIVE_PARADIGM,
  stem,
  paradigm: text
});

const apifetchArticle = (lemma) => {
  let url = `http://satni.uit.no:8080/exist/restxq/satni/article/${lemma}`;
  return fetch(encodeURI(url));
};

export const fetchArticles = (lemma) => (dispatch) => {
  dispatch(requestArticles(lemma));

  return apifetchArticle(lemma)
    .then(response => {
      return response.text();
    })
    .then(text => dispatch(receiveArticles(lemma, normaliseArticles(toJson(text)))));
};

const fetchItems = (key) => (dispatch) => {
  dispatch(requestItems(key));

  let url = `http://satni.uit.no:8080/exist/restxq/satni/search?query=${key}`;
  return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveItems(key, toJson(text))));
};

export const fetchParadigm = (stem) => (dispatch) => {
  dispatch(requestParadigm(stem));

  let url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.lang}`;
  console.log(encodeURI(url));
  return fetch(encodeURI(url, {credentials: 'same-origin', mode: 'no-cors'}))
      .then(response => response.text())
      .then(text => dispatch(receiveParadigm(stem, text)));
};

export const shouldFetchArticles = (state, lemma) => {
  const articles = state.articlesByLemma[lemma];
  if (!lemma
      || (articles && articles.isFetching)
      || (articles && !articles.isFetching && articles.items)) {
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

export const fetchItemsIfNeeded = (key) => (dispatch, getState) => {
  if (shouldFetchItems(getState().search, key)) {
    return dispatch(fetchItems(key));
  }
};
