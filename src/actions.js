import fetch from 'cross-fetch';
import {handleErrors, toJson} from './utils';

export const REQUEST_PARADIGM = 'REQUEST_PARADIGM';
export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const SELECT_KEY = 'SELECT_KEY';

export const RECEIVE_PARADIGM = 'RECEIVE_PARADIGM';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const selectKey = (key) => ({
  type: SELECT_KEY,
  key
});

export const requestItems = (key) => ({
  type: REQUEST_ITEMS
});

export const requestParadigm = (stem) => ({
  type: FETCH_PARADIGM_REQUEST,
  stem
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

const fetchItems = (key) => (dispatch) => {
  dispatch(requestItems(key));

  let url = `https://satni.uit.no/satnibackend/search?query=${key}`;
  return fetch(encodeURI(url))
      .then(handleErrors)
      .then(response => response.text())
      .then(text => dispatch(receiveItems(key, toJson(text))));
};

export const fetchParadigm = (stem) => (dispatch) => {
  dispatch(requestParadigm(stem));

  let url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?json=true&text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.lang}`;
  console.log(encodeURI(url));
  return fetch(encodeURI(url, {credentials: 'same-origin', mode: 'no-cors'}))
      .then(handleErrors)
      .then(response => response.text())
      .then(text => dispatch(receiveParadigm(stem, text)));
};

export const shouldFetchItems = (state, key) => {
  if (state.usedSearchKeys.has(key)) {
    return false;
  } else {
    return true;
  }
};

export const fetchItemsIfNeeded = (key) => (dispatch, getState) => {
  if (shouldFetchItems(getState().search, key)) {
    return dispatch(fetchItems(key));
  }
};
