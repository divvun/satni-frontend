import { combineReducers } from 'redux';
import { articlesByLemma } from './articleReducers';
import { search } from './searchItemReducers';
import {
  FETCH_PARADIGM_REQUEST,
  FETCH_PARADIGM_SUCCESS
} from './actions';

import {
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE
} from './articleActions';

const paradigm = (
  state = {
    isFetching: false,
    analyses: {}
  },
  action
) => {
  switch (action.type) {
    case FETCH_PARADIGM_REQUEST:
      return {
        ...state,
        ...{
          isFetching: true
        }
      };
    case FETCH_PARADIGM_SUCCESS:
      return {
        ...state,
        ...{
          isFetching: false,
          analyses: action.json
        }
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          analyses: {}
        }
      };
    default:
      return state;
  }
};

const paradigmByStem = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        ...{
          [action.stemAsKey]: paradigm(state[action.stemAsKey], action)
        }
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  articlesByLemma,
  search,
  paradigmByStem
});

export default rootReducer;
