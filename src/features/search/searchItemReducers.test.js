import { search } from './searchItemReducers';
import * as actions from './searchItemActions';
import {OrderedSet, Set} from 'immutable';

const initialState = {
  'searchKey': '',
  'isSearching': false,
  'searchItems': Set(),
  'usedSearchKeys': Set(),
  'resultItems': OrderedSet(),
  errorMessage: null
};

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual(initialState);
  });

  it('should handle SELECT_KEY', () => {
    expect(search(initialState, actions.selectKey('guolli'))).toEqual({
      searchKey: 'guolli',
      isSearching: false,
      searchItems: Set(),
      usedSearchKeys: Set(),
      'resultItems': OrderedSet(),
      errorMessage: null
    });
  });

  it('should handle FETCH_SEARCHITEMS_BEGIN', () => {
    expect(search(initialState, actions.fetchSearchItemsBegin('guolli'))).toEqual({
      'searchKey': 'guolli',
      'isSearching': true,
      'searchItems': Set(),
      'usedSearchKeys': Set(),
      'resultItems': OrderedSet(),
      errorMessage: null
    });
  });

  it('should handle FETCH_SEARCHITEMS_FAILURE', () => {
    expect(search(initialState, actions.fetchSearchItemsFailure('guolli', 'This is an error'))).toEqual({
      'searchKey': 'guolli',
      'isSearching': false,
      'searchItems': Set(),
      'usedSearchKeys': Set(),
      'resultItems': OrderedSet(),
      errorMessage: 'This is an error'
    });
  });

  it('should handle FETCH_SEARCHITEMS_SUCCESS', () => {
    const receivedItems = [
      { term: 'guollebuktin', dict: 'smenob', lang: 'sme', langs: 'nob' },
      { term: 'guolleguhppár', dict: 'smenob', lang: 'sme', langs: 'nob' },
      { term: 'guolljut', dict: 'smefin', lang: 'sme', langs: 'fin' },
      { term: 'guollegáhkku', dict: 'smefin', lang: 'sme', langs: 'fin' },
      { term: 'suolljut', dict: 'smefin', lang: 'sme', langs: 'fin' }
    ];
    const thisState = {
      ...initialState,
      ...{
        searchKey: 'guol'
      }
    };

    expect(search(thisState, {
      type: actions.FETCH_SEARCHITEMS_SUCCESS,
      payload: {
        key: 'guol',
        searchItems: Set(receivedItems)
      }
    })).toEqual({
      'searchKey': 'guol',
      'isSearching': false,
      'searchItems': Set(receivedItems),
      'usedSearchKeys': Set.of('guol'),
      'resultItems': OrderedSet.of(
          'guollebuktin',
          'guollegáhkku',
          'guolleguhppár',
          'guolljut'
        ),
      errorMessage: null
    });
  });
});
