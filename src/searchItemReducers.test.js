import { search } from './searchItemReducers';
import * as actions from './searchItemActions';
import {OrderedSet, Set} from 'immutable';

const initialState = {
  'searchKey': '',
  'isSearching': false,
  'searchItems': Set(),
  'usedSearchKeys': Set(),
  'resultItems': OrderedSet()
};

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual(initialState);
  });

  it('should handle SELECT_LEMMA', () => {
    expect(search(initialState, {
      type: actions.SELECT_LEMMA,
      lemma: 'guolli'
    })).toEqual({
      searchKey: '',
      isSearching: false,
      searchItems: Set(),
      usedSearchKeys: Set(),
      'resultItems': OrderedSet()
    });
  });

  it('should handle REQUEST_ITEMS', () => {
    expect(search(initialState, {
      type: actions.REQUEST_ITEMS
    })).toEqual({
      'searchKey': '',
      'isSearching': true,
      'searchItems': Set(),
      'usedSearchKeys': Set(),
      'resultItems': OrderedSet()
    });
  });

  it('should handle RECEIVE_ITEMS', () => {
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
      type: actions.RECEIVE_ITEMS,
      key: 'guol',
      searchItems: Set(receivedItems),
      usedSearchKeys: Set.of('guol')
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
        )
    });
  });
});
