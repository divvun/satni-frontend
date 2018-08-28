import fetch from 'cross-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
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

function requestPosts (subreddit) {
  console.log(subreddit);
  return {
    type: REQUEST_POSTS,
    subreddit
  };
}

function receivePosts (subreddit, json) {
  console.log('receivePosts');
  return {
    type: RECEIVE_POSTS,
    subreddit,
    posts: json,
    receivedAt: Date.now()
  };
}

function fetchPosts (subreddit) {
  console.log('fetchPosts');
  return dispatch => {
    dispatch(requestPosts(subreddit));
    let url = `http://satni.uit.no:8080/exist/restxq/satni/article/${subreddit}`;
    console.log(encodeURI(url));
    return fetch(encodeURI(url))
      .then(response => response.text())
      .then(json => dispatch(receivePosts(subreddit, json)));
  };
}

function shouldFetchPosts (state, subreddit) {
  console.log('shouldFetchPosts');
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded (subreddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), subreddit)) {
      return dispatch(fetchPosts(subreddit));
    }
  };
}
