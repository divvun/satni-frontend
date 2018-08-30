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
    articles: text,
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
      .then(text => dispatch(receiveArticles(lemma, text)));
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
