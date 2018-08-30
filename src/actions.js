import fetch from 'cross-fetch';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const SELECT_LEMMA = 'SELECT_LEMMA';

export function selectLemma (lemma) {
  return {
    type: SELECT_LEMMA,
    lemma
  };
}

function requestArticles (lemma) {
  console.log(lemma);
  return {
    type: REQUEST_ARTICLES,
    lemma
  };
}

function receiveArticles (lemma, text) {
  console.log('receiveArticles');
  return {
    type: RECEIVE_ARTICLES,
    lemma,
    articles: text
  };
}

function toJson (text) {
  // eXist sometimes sends misformed json, correct it here
  return JSON.parse(
    text.indexOf('{') === 0 ?
    '[' + text.slice(text.indexOf('{') + 1, text.lastIndexOf('}')) + ']' :
    text)
}

function fetchArticles (lemma) {
  console.log('fetchArticles');
  return dispatch => {
    dispatch(requestArticles(lemma));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/article/${lemma}`;
    console.log(encodeURI(url));
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveArticles(lemma, toJson(text))));
  };
}

function shouldFetchArticles (state, lemma) {
  console.log('shouldFetchArticles');
  const articles = state.articlesByLemma[lemma];
  if (!articles) {
    return true;
  } else if (articles.isFetching) {
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
