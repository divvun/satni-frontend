import { combineReducers } from 'redux';
import {
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES
} from './actions';

function selectedSubreddit (state = 'guolli', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

function articles (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.articles,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function articlesBySubreddit (state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_ARTICLES:
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        [action.subreddit]: articles(state[action.subreddit], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  articlesBySubreddit,
  selectedSubreddit
});

export default rootReducer;
