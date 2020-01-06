import fetch from 'cross-fetch';
import { handleErrors, stemToKey } from 'utils';

export const FETCH_PARADIGM_BEGIN = 'FETCH_PARADIGM_BEGIN';
export const FETCH_PARADIGM_SUCCESS = 'FETCH_PARADIGM_SUCCESS';
export const FETCH_PARADIGM_FAILURE = 'FETCH_PARADIGM_FAILURE';

export const fetchParadigmBegin = (stem) => ({
  type: FETCH_PARADIGM_BEGIN,
  payload: {
    stem
  }
});

export const fetchParadigmSuccess = (stem, json) => ({
  type: FETCH_PARADIGM_SUCCESS,
  payload: {
    stem,
    paradigm: json
  }
});

export const fetchParadigmFailure = (stem, error) => ({
  type: FETCH_PARADIGM_FAILURE,
  payload: {
    stem,
    error
  }
});

export const fetchParadigm = (stem) => (dispatch) => {
  dispatch(fetchParadigmBegin(stem));

  const url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?json=true&text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.language}`;

  return fetch(encodeURI(url), {credentials: 'same-origin', mode: 'no-cors'})
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch(fetchParadigmSuccess(stem, json)))
      .catch(error => dispatch(fetchParadigmFailure(stem, error))
    );
};

export const shouldFetchParadigm = (state, key) => {
  const paradigmByStem = state.paradigmByStem;
  const paradigm = paradigmByStem[key];

  if (paradigmByStem.isFetching || paradigm || (paradigm && paradigm.has(key))) {
    return false;
  } else {
    return true;
  }
};

export const fetchParadigmIfNeeded = (stem) => (dispatch, getState) => {
  if (shouldFetchParadigm(getState(), stemToKey(stem))) {
    console.log('pActions', stem);
    return dispatch(fetchParadigm(stem));
  }
};
