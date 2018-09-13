import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('creates RECEIVE_ARTICLES when fetching articles has been done', () => {
    const lemma = 'guolle';
    const expectedActions = [
      {
        'lemma': 'guolle',
        'type': 'REQUEST_ARTICLES'
      },
      {'articles': [
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
        }],
        'lemma': 'guolle',
        'type': 'RECEIVE_ARTICLES'
      }
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchArticles(lemma)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
