import fetch from 'cross-fetch';
import {toJson, removeDuplicates} from './utils';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const SELECT_LEMMA = 'SELECT_LEMMA';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export function selectLemma (lemma) {
  return {
    type: SELECT_LEMMA,
    lemma
  };
}

export function requestArticles (lemma) {
  return {
    type: REQUEST_ARTICLES,
    lemma
  };
}

export function requestItems (key) {
  return {
    type: REQUEST_ITEMS
  };
}

export function receiveArticles (lemma, json) {
  return {
    type: RECEIVE_ARTICLES,
    lemma,
    articles: json
  };
}

export function receiveItems (key, json) {
  return {
    type: RECEIVE_ITEMS,
    key,
    searchItems: json
  };
}

export function fetchArticles (lemma) {
  return dispatch => {
    dispatch(requestArticles(lemma));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/article/${lemma}`;
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveArticles(lemma, removeDuplicates(toJson(text)))));
  };
}

function fetchItems (key) {
  return dispatch => {
    dispatch(requestItems(key));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/search?query=${key}`;
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveItems(key, toJson(text))));
  };
}

export function shouldFetchArticles (state, lemma) {
  const articles = state.articlesByLemma[lemma];
  if (!lemma
      || (articles && articles.isFetching)
      || (articles && !articles.isFetching && articles.items)) {
    return false;
  } else {
    return true;
  }
}

export function shouldFetchItems (state, key) {
  if (state.usedSearchKeys.has(key)) {
    return false;
  } else {
    return true;
  }
}

export function fetchArticlesIfNeeded (lemma) {
  return (dispatch, getState) => {
    if (shouldFetchArticles(getState(), lemma)) {
      return dispatch(fetchArticles(lemma));
    }
  };
}

export function fetchItemsIfNeeded (key) {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState().search, key)) {
      return dispatch(fetchItems(key));
    }
  };
}
