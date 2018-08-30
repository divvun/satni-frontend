import { combineReducers } from 'redux';
import {
  SELECT_LEMMA,
  INVALIDATE_LEMMA,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES
} from './actions';

function selectedLemma (state = 'guolli', action) {
  switch (action.type) {
    case SELECT_LEMMA:
      return action.lemma;
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
    case INVALIDATE_LEMMA:
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

function articlesByLemma (state = {}, action) {
  switch (action.type) {
    case INVALIDATE_LEMMA:
    case RECEIVE_ARTICLES:
    case REQUEST_ARTICLES:
      return Object.assign({}, state, {
        [action.lemma]: articles(state[action.lemma], action)
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  articlesByLemma,
  selectedLemma
});

export default rootReducer;
