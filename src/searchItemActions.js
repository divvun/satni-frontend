import fetch from 'cross-fetch';
import {handleErrors, toJson} from './utils';

export const FETCH_SEARCHITEMS_BEGIN = 'FETCH_SEARCHITEMS_BEGIN';
export const SELECT_KEY = 'SELECT_KEY';
export const FETCH_SEARCHITEMS_SUCCESS = 'FETCH_SEARCHITEMS_SUCCESS';

export const selectKey = (key) => ({
  type: SELECT_KEY,
  payload: {
    key
  }
});

export const fetchSearchItemsBegin = (key) => ({
  type: FETCH_SEARCHITEMS_BEGIN,
  payload: {
    key
  }
});

export const fetchSearchItemsSuccess = (key, json) => ({
  type: FETCH_SEARCHITEMS_SUCCESS,
  payload: {
    key,
    searchItems: json
  }
});

const fetchSearchItems = (key) => (dispatch) => {
  dispatch(fetchSearchItemsBegin(key));

  let url = `https://satni.uit.no/satnibackend/search?query=${key}`;
  return fetch(encodeURI(url))
      .then(handleErrors)
      .then(response => response.text())
      .then(text => dispatch(fetchSearchItemsSuccess(key, toJson(text))));
};

export const shouldFetchSearchItems = (state, key) => {
  if (state.usedSearchKeys.has(key)) {
    return false;
  } else {
    return true;
  }
};

export const fetchSearchItemsIfNeeded = (key) => (dispatch, getState) => {
  if (shouldFetchSearchItems(getState().search, key)) {
    return dispatch(fetchSearchItems(key));
  }
};
