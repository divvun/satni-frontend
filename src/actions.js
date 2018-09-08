import fetch from 'cross-fetch';
import {normaliseArticles, toJson} from './utils';

export const REQUEST_PARADIGM = 'REQUEST_PARADIGM';
export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const SELECT_LEMMA = 'SELECT_LEMMA';
export const SELECT_KEY = 'SELECT_KEY';

export const RECEIVE_PARADIGM = 'RECEIVE_PARADIGM';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
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
  type: REQUEST_ARTICLES,
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
  type: RECEIVE_ARTICLES,
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

export const fetchArticles = (lemma) => {
  return dispatch => {
    dispatch(requestArticles(lemma));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/article/${lemma}`;
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveArticles(lemma, normaliseArticles(toJson(text)))));
  };
};

const fetchItems = (key) => {
  return dispatch => {
    dispatch(requestItems(key));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/search?query=${key}`;
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveItems(key, toJson(text))));
  };
};

export const fetchParadigm = (stem) => {
  console.log('fetchItems');
  return dispatch => {
    dispatch(requestParadigm(stem));
    let url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.lang}`;
    console.log(encodeURI(url));
    return fetch(encodeURI(url, {credentials: 'same-origin', mode: 'no-cors'}))
      .then(response => response.text())
      .then(text => dispatch(receiveParadigm(stem, text)));
  };
}

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

export const fetchArticlesIfNeeded = (lemma) => {
  return (dispatch, getState) => {
    if (shouldFetchArticles(getState(), lemma)) {
      return dispatch(fetchArticles(lemma));
    }
  };
};

export const fetchItemsIfNeeded = (key) => {
  return (dispatch, getState) => {
    if (shouldFetchItems(getState().search, key)) {
      return dispatch(fetchItems(key));
    }
  };
};
