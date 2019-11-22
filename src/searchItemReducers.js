import {OrderedSet, Set} from 'immutable';

import {
  SELECT_KEY,
  FETCH_SEARCHITEMS_BEGIN,
  FETCH_SEARCHITEMS_SUCCESS,
  FETCH_SEARCHITEMS_FAILURE
} from './searchItemActions';

const filterItems = (searchItems, key) => {
  return Set(
    [...searchItems]
  .map(item => item.term))
  .filter(term => term.toLowerCase().startsWith(key))
  .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

export const search = (
  state = {
    searchKey: '',
    isSearching: false,
    usedSearchKeys: Set(),
    searchItems: Set(),
    resultItems: OrderedSet(),
    errorMessage: null
  },
  action
) => {
  switch (action.type) {
    case SELECT_KEY:
      return {
        ...state,
        ...{
          searchKey: action.payload.key,
          resultItems: filterItems(state.searchItems, action.payload.key),
          isSearching: false,
          errorMessage: null
        }
      };
    case FETCH_SEARCHITEMS_BEGIN:
      return {
        ...state,
        ...{
          searchKey: action.payload.key,
          isSearching: true,
          errorMessage: null
        }
      };
    case FETCH_SEARCHITEMS_SUCCESS:
      const currentSearchItems = action.payload.searchItems ? state.searchItems.union(action.payload.searchItems) : state.searchItems;
      return {
        ...state,
        ...{
          isSearching: false,
          usedSearchKeys: state.usedSearchKeys.add(action.payload.key),
          searchItems: currentSearchItems,
          resultItems: filterItems(currentSearchItems, state.searchKey),
          errorMessage: null
        }
      };
    case FETCH_SEARCHITEMS_FAILURE:
      return {
        ...state,
        ...{
          searchKey: action.payload.key,
          isSearching: false,
          errorMessage: action.payload.error
        }
      };
    default:
      return state;
  }
};
