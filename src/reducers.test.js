import reducer from './reducers';
import * as actions from './actions';
import {OrderedSet, Set} from 'immutable';

const initialState = {
  articlesByLemma: {},
  search: {
    'searchKey': '',
    'isSearching': false,
    'searchItems': Set(),
    'usedSearchKeys': Set(),
    'resultItems': OrderedSet()
  },
  errorMessage: null
};

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle SELECT_LEMMA', () => {
    expect(reducer(initialState, {
      type: actions.SELECT_LEMMA,
      lemma: 'guolli'
    })).toEqual({
      articlesByLemma: {},
      search: {
        searchKey: '',
        isSearching: false,
        searchItems: Set(),
        usedSearchKeys: Set(),
        'resultItems': OrderedSet()
      },
      errorMessage: null
    });
  });

  it('should handle REQUEST_ITEMS', () => {
    expect(reducer(initialState, {
      type: actions.REQUEST_ITEMS
    })).toEqual({
      articlesByLemma: {},
      search: {
        'searchKey': '',
        'isSearching': true,
        'searchItems': Set(),
        'usedSearchKeys': Set(),
        'resultItems': OrderedSet()
      },
      errorMessage: null
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
    const thisSearch = {
      ...initialState.search,
      ...{
        searchKey: 'guol'
      }
    };
    const thisState = {
      ...initialState,
      ...{
        search: thisSearch
      }
    };

    expect(reducer(thisState, {
      type: actions.RECEIVE_ITEMS,
      key: 'guol',
      searchItems: Set(receivedItems),
      usedSearchKeys: Set.of('guol')
    })).toEqual({
      'articlesByLemma': {},
      'search': {
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
      },
      errorMessage: null
    });
  });
});
