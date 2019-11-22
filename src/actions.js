import fetch from 'cross-fetch';
import {handleErrors, toJson} from './utils';

export const REQUEST_PARADIGM = 'REQUEST_PARADIGM';
export const RECEIVE_PARADIGM = 'RECEIVE_PARADIGM';

export const requestParadigm = (stem) => ({
  type: REQUEST_PARADIGM,
  stem
});

export const receiveParadigm = (stem, text) => ({
  type: RECEIVE_PARADIGM,
  stem,
  paradigm: text
});

export const fetchParadigm = (stem) => (dispatch) => {
  dispatch(requestParadigm(stem));

  let url = `http://gtweb.uit.no/cgi-bin/smi/smi.cgi?text=${stem.lemma}&pos=${stem.pos}&mode=standard&action=paradigm&lang=${stem.lang}`;
  console.log(encodeURI(url));
  return fetch(encodeURI(url, {credentials: 'same-origin', mode: 'no-cors'}))
      .then(handleErrors)
      .then(response => response.text())
      .then(text => dispatch(receiveParadigm(stem, text)));
};
