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
      {
        'articles': [
          {
            'dict': 'SD-terms',
            'stems': [
               {'lang': 'smj', 'lemma': 'guolle', 'pos': 'S'},
               {'lang': 'sme', 'lemma': 'guolli', 'pos': 'S'},
               {'lang': 'nob', 'lemma': 'fisk', 'pos': 'S'},
               {'lang': 'sma', 'lemma': 'guelie', 'pos': 'S'}
            ]
          }
        ],
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
