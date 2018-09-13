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
  console.log(lemma);
  return {
    type: REQUEST_ARTICLES,
    lemma
  };
}

export function requestItems (key) {
  console.log(key);
  return {
    type: REQUEST_ITEMS
  };
}

export function receiveArticles (lemma, json) {
  console.log('receiveArticles');
  return {
    type: RECEIVE_ARTICLES,
    lemma,
    articles: json
  };
}

export function receiveItems (key, json) {
  console.log('receiveItems');
  return {
    type: RECEIVE_ITEMS,
    key,
    searchItems: json
  };
}

function fetchArticles (lemma) {
  console.log('fetchArticles');
  return dispatch => {
    dispatch(requestArticles(lemma));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/article/${lemma}`;
    console.log(encodeURI(url));
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveArticles(lemma, removeDuplicates(toJson(text)))));
  };
}

function fetchItems (key) {
  console.log('fetchItems');
  return dispatch => {
    dispatch(requestItems(key));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/search?query=${key}`;
    console.log(encodeURI(url));
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveItems(key, toJson(text))));
  };
}

export function shouldFetchArticles (state, lemma) {
  console.log('shouldFetchArticles');
  const articles = state.articlesByLemma[lemma];
  if (!lemma) {
    return false;
  } else if (!articles) {
    return true;
  } else if (articles.isFetching) {
    return false;
  } else {
    return true;
  }
}

function shouldFetchItems (state, key) {
  console.log('shouldFetchItems');
  console.log(state, key);
  // return true;

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
