import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { OrderedSet, Set } from 'immutable';

import {
  SELECT_LEMMA,
  SELECT_KEY,
  REQUEST_ARTICLES,
  RECEIVE_ARTICLES,
  REQUEST_ITEMS,
  RECEIVE_ITEMS
} from './actions';

const selectedLemma = (state = '', action) => {
  switch (action.type) {
    case SELECT_LEMMA:
      return action.lemma;
    default:
      return state;
  }
};

const articles = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case REQUEST_ARTICLES:
      return {
        ...state,
        ...{
          isFetching: true
        }
      };
    case RECEIVE_ARTICLES:
      return {
        ...state,
        ...{
          isFetching: false,
          items: action.articles
        }
      };
    default:
      return state;
  }
};

const articlesByLemma = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ARTICLES:
    case REQUEST_ARTICLES:
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

const rootReducer = combineReducers({
  articlesByLemma,
  selectedLemma,
  search,
  form: formReducer
});

export default rootReducer;
