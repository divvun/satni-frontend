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

  it('should handle FETCH_ARTICLES_REQUEST', () => {
    expect(reducer({
      articlesByLemma: {},
      search: {
        isSearching: false,
        searchItems: Set(),
        usedSearchKeys: Set(),
        'resultItems': OrderedSet()
      },
    },
      {
        type: actions.FETCH_ARTICLES_REQUEST,
        lemma: 'guolli'
      })).toEqual({
        'articlesByLemma': {
          'guolli': {
            'isFetching': true,
            'items': []
          }
        },
        'search': {
          'isSearching': false,
          'searchItems': Set(),
          'usedSearchKeys': Set(),
          'resultItems': OrderedSet()
        },
        errorMessage: null
      });
  });

  it('should handle FETCH_ARTICLES_SUCCESS', () => {
    expect(reducer({
      'articlesByLemma': {
        'guolli': {
          'isFetching': true,
          'items': []
        }
      },
      'search': {
        'isSearching': false,
        'searchItems': Set(),
        'usedSearchKeys': Set(),
        'resultItems': OrderedSet()
        },
      },
      {
        type: actions.FETCH_ARTICLES_SUCCESS,
        lemma: 'guolli',
        articles: [
          {
            'def': null,
            'dict': 'SD-terms',
            'expl': null,
            'lang': 'smj',
            'pos': 'S',
            'status': null,
            'term': 'guolle',
            'termwikiref': '6046',
            'tg': [
              {
                '#text': [`\n            `, `\n        `],
                't': 'guolli',
                'xml:lang': 'sme'
              }, {
                '#text': [`\n            `, `\n        `],
                't': 'fisk',
                'xml:lang': 'nor'
              },
              {
                '#text': [`\n            `, `\n        `],
                't': 'guolle',
                'xml:lang': 'smj'
              },
              {
                '#text': [`\n            `, `\n        `],
                't': 'guelie',
                'xml:lang': 'sma'
              }
            ]
          }
        ]
      })).toEqual({
        'articlesByLemma': {
          'guolli': {
            'isFetching': false,
            'items': [
              {
                'def': null,
                'dict': 'SD-terms',
                'expl': null,
                'lang': 'smj',
                'pos': 'S',
                'status': null,
                'term': 'guolle',
                'termwikiref': '6046',
                'tg': [
                  {
                    '#text': [`\n            `, `\n        `],
                    't': 'guolli',
                    'xml:lang': 'sme'
                  },
                  {
                    '#text': [`\n            `, `\n        `],
                    't': 'fisk',
                    'xml:lang': 'nor'
                  },
                  {
                    '#text': [`\n            `, `\n        `],
                    't': 'guolle',
                    'xml:lang': 'smj'
                  },
                  {
                    '#text': [`\n            `, `\n        `],
                    't': 'guelie',
                    'xml:lang': 'sma'
                  }
                ]
              }
            ]
          }
        },
        'search': {
          'isSearching': false,
          'searchItems': Set(),
          'usedSearchKeys': Set(),
          'resultItems': OrderedSet()
        },
        errorMessage: null
      });
  });
});
