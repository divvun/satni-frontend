import reducer from './reducers';
import * as actions from './actions';
import {OrderedSet, Set} from 'immutable';

const initialState = {
  articlesByLemma: {},
  paradigmByStem: {},
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
      paradigmByStem: {},
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
      paradigmByStem: {},
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
      paradigmByStem: {},
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
      }
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
        paradigmByStem: {},
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
      }
    },
      {
        type: actions.FETCH_ARTICLES_SUCCESS,
        lemma: 'guolli',
        articles: [
          {
            'term': 'guolli',
            'pos': 'N',
            'dict': 'termwiki',
            'status': null,
            'category': 'Luonddudieđa ja matematihkka',
            'termwikiref': 'Luonddudieđa ja matematihkka:guolli',
            'def': null,
            'expl': null,
            'tg': [
              {
                'xml:lang': 'nb',
                '#text': [
                  '\n      ',
                  '\n    '
                ],
                't': {
                  'pos': 'N',
                  '#text': 'fisk'
                }
              },
              {
                'xml:lang': 'se',
                '#text': [
                  '\n      ',
                  '\n    '
                ],
                't': {
                  'pos': 'N',
                  '#text': 'guolli'
                }
              },
              {
                'xml:lang': 'sma',
                '#text': [
                  '\n      ',
                  '\n    '
                ],
                't': {
                  'pos': 'N',
                  '#text': 'guelie'
                }
              },
              {
                'xml:lang': 'smj',
                '#text': [
                  '\n      ',
                  '\n    '
                ],
                't': {
                  'pos': 'N',
                  '#text': 'guolle'
                }
              },
              {
                'xml:lang': 'smn',
                '#text': [
                  '\n      ',
                  '\n    '
                ],
                't': {
                  'pos': 'N',
                  '#text': 'kyeli'
                }
              },
              {
                'xml:lang': 'fi',
                '#text': [
                  '\n      ',
                  '\n    '
                ],
                't': {
                  'pos': 'N',
                  '#text': 'kala'
                }
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
                'category': 'Luonddudieđa ja matematihkka',
                'def': null,
                'dict': 'termwiki',
                'expl': null,
                'pos': 'N',
                'status': null,
                'term': 'guolli',
                'termwikiref': 'Luonddudieđa ja matematihkka:guolli',
                'tg': [
                  {
                    '#text': ['\n      ', '\n    '],
                    't': {'#text': 'fisk', 'pos': 'N'}, 'xml:lang': 'nb'
                  },
                  {
                    '#text': ['\n      ', '\n    '],
                    't': {'#text': 'guolli', 'pos': 'N'}, 'xml:lang': 'se'
                  },
                  {
                    '#text': ['\n      ', '\n    '],
                    't': {'#text': 'guelie', 'pos': 'N'}, 'xml:lang': 'sma'
                  },
                  {
                    '#text': ['\n      ', '\n    '],
                    't': {'#text': 'guolle', 'pos': 'N'}, 'xml:lang': 'smj'
                  },
                  {
                    '#text': ['\n      ', '\n    '],
                    't': {'#text': 'kyeli', 'pos': 'N'}, 'xml:lang': 'smn'
                  },
                  {
                    '#text': ['\n      ', '\n    '],
                    't': {'#text': 'kala', 'pos': 'N'}, 'xml:lang': 'fi'
                  }
                ]
              }
            ]
          }
        },
        paradigmByStem: {},
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
