import fetch from 'cross-fetch';
import {handleErrors, toJson} from './utils';

export const REQUEST_ITEMS = 'REQUEST_ITEMS';
export const SELECT_KEY = 'SELECT_KEY';
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';

export const selectKey = (key) => ({
  type: SELECT_KEY,
  key
});

export const requestItems = (key) => ({
  type: REQUEST_ITEMS
});

export const receiveItems = (key, json) => ({
  type: RECEIVE_ITEMS,
  key,
  searchItems: json
});

const fetchItems = (key) => (dispatch) => {
  dispatch(requestItems(key));

  let url = `https://satni.uit.no/satnibackend/search?query=${key}`;
  return fetch(encodeURI(url))
      .then(handleErrors)
      .then(response => response.text())
      .then(text => dispatch(receiveItems(key, toJson(text))));
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
