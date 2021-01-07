import {OrderedSet, Set} from 'immutable';

import {
  SELECT_KEY,
  REQUEST_ITEMS,
  RECEIVE_ITEMS
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
