import fetch from 'cross-fetch';
import {handleErrors, toJson} from './utils';

export const FETCH_SEARCHITEMS_BEGIN = 'FETCH_SEARCHITEMS_BEGIN';
export const SELECT_KEY = 'SELECT_KEY';
export const FETCH_SEARCHITEMS_SUCCESS = 'FETCH_SEARCHITEMS_SUCCESS';
export const FETCH_SEARCHITEMS_FAILURE = 'FETCH_SEARCHITEMS_FAILURE';

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

export const fetchSearchItemsFailure = (key, error) => ({
  type: FETCH_SEARCHITEMS_FAILURE,
  payload: {
    key,
    error
  }
});

const fetchSearchItems = (key) => (dispatch) => {
  dispatch(fetchSearchItemsBegin(key));

  let url = `https://satni.uit.no/satnibackend/search?query=${key}`;
  return fetch(encodeURI(url))
      .then(handleErrors)
      .then(response => response.text())
      .then(text => dispatch(fetchSearchItemsSuccess(key, toJson(text))))
      .catch(error => dispatch(fetchSearchItemsFailure(key, error)));
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
