import { combineReducers } from 'redux';
import { OrderedSet, Set } from 'immutable';

import {
  SELECT_KEY,
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS,
  FETCH_PARADIGM_REQUEST,
  FETCH_PARADIGM_SUCCESS,
  REQUEST_ITEMS,
  RECEIVE_ITEMS
} from './actions';

const articles = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        ...{
          isFetching: true
        }
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        ...{
          isFetching: false,
          items: action.articles
        }
      };
    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        ...{
          isFetching: false,
          items: []
        }
      };
    default:
      return state;
  }
};

const articlesByLemma = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        ...{
          [action.lemma]: articles(state[action.lemma], action)
        }
      };
    default:
      return state;
  }
};

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
    case FETCH_ARTICLES_ERROR:
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
    case FETCH_ARTICLES_REQUEST:
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

const filterItems = (searchItems, key) => {
  return Set(
    [...searchItems]
  .map(item => item.term))
  .filter(term => term.toLowerCase().startsWith(key))
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

const search = (
  state = {
    searchKey: '',
    isSearching: false,
    usedSearchKeys: Set(),
    searchItems: Set(),
    resultItems: OrderedSet()
  },
  action
) => {
  switch (action.type) {
    case SELECT_KEY:
      return {
        ...state,
        ...{
          searchKey: action.key,
          resultItems: filterItems(state.searchItems, action.key)
        }
      };
    case REQUEST_ITEMS:
      return {
        ...state,
        ...{
          isSearching: true
        }
      };
    case RECEIVE_ITEMS:
      const currentSearchItems = action.searchItems ? state.searchItems.union(action.searchItems) : state.searchItems;
      return {
        ...state,
        ...{
          isSearching: false,
          usedSearchKeys: state.usedSearchKeys.add(action.key),
          searchItems: currentSearchItems,
          resultItems: filterItems(currentSearchItems, state.searchKey)
        }
      };
    default:
      return state;
  }
};

const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_ERROR':
      return action.message;
    case 'FETCH_ARTICLES_REQUEST':
    case 'FETCH_ARTICLES_SUCCESS':
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  articlesByLemma,
  paradigmByStem,
  search,
  errorMessage
});

export default rootReducer;
