import fetch from 'cross-fetch';
import {handleErrors, toJson} from './utils';

export const FETCH_PARADIGM_REQUEST = 'FETCH_PARADIGM_REQUEST';
export const FETCH_PARADIGM_SUCCESS = 'FETCH_PARADIGM_SUCCESS';

export const requestParadigm = (stem) => ({
  type: FETCH_PARADIGM_REQUEST,
  stem
});

export const receiveParadigm = (stem, json) => ({
  type: FETCH_PARADIGM_SUCCESS,
  stem,
  paradigm: json
});

export const fetchParadigm = (stem) => (dispatch) => {
  dispatch(requestParadigm(stem));

  let url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?json=true&text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.lang}`;
  console.log(encodeURI(url));
  return fetch(encodeURI(url, {credentials: 'same-origin', mode: 'no-cors'}))
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch(receiveParadigm(stem, json)));
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
