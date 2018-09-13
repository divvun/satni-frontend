import reducer from './reducers';
import * as actions from './actions';
import {Set} from 'immutable';

const initialState = {
  articlesByLemma: {},
  search: {
    'isSearching': false,
    'searchItems': Set(),
    'usedSearchKeys': Set()
  },
  selectedLemma: ''
};

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle REQUEST_ITEMS', () => {
    key = 'guo';
    expect(reducer(initialState, {
      type: actions.REQUEST_ITEMS,
    })).toEqual(initialState);
  });

  it('should handle SELECT_LEMMA', () => {
    expect(reducer('', {
      type: actions.SELECT_LEMMA,
      lemma: 'guolle'
    })).toEqual({
      articlesByLemma: {},
      search: {
        isSearching: false,
        searchItems: Set(),
        usedSearchKeys: Set()
      },
      selectedLemma: 'guolle'
    });
  });
});
