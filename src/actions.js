import fetch from 'cross-fetch';

export const REQUEST_ARTICLES = 'REQUEST_ARTICLES';
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

export function selectSubreddit (subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  };
}

export function invalidateSubreddit (subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  };
}

function requestArticles (subreddit) {
  console.log(subreddit);
  return {
    type: REQUEST_ARTICLES,
    subreddit
  };
}

function receiveArticles (subreddit, text) {
  console.log('receiveArticles');
  return {
    type: RECEIVE_ARTICLES,
    subreddit,
    articles: text,
    receivedAt: Date.now()
  };
}

function fetchArticles (subreddit) {
  console.log('fetchArticles');
  return dispatch => {
    dispatch(requestArticles(subreddit));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/article/${subreddit}`;
    console.log(encodeURI(url));
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(text => dispatch(receiveArticles(subreddit, text)));
  };
}

function shouldFetchArticles (state, subreddit) {
  console.log('shouldFetchArticles');
  const articles = state.articlesBySubreddit[subreddit];
  if (!articles) {
    return true;
  } else if (articles.isFetching) {
    return false;
  } else {
    return articles.didInvalidate;
  }
}

export function fetchArticlesIfNeeded (subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchArticles(getState(), subreddit)) {
      return dispatch(fetchArticles(subreddit));
    }
  };
}
