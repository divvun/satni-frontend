import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './articleActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });
  it('creates FETCH_ARTICLES_SUCCESS when fetching articles has been done', () => {
    const lemma = 'guolle';
    const expectedActions = [
      {
        payload: {'lemma': 'guolle'},
        type: 'FETCH_ARTICLES_BEGIN'
      },
      {
        payload: {
          'articles': [
            {
              'dict': 'termwiki',
              'termwikiref': 'Luonddudieđa ja matematihkka:guolli',
              'stems': [
               {'lang': 'smj', 'lemma': 'guolle', 'pos': 'N'},
               {'lang': 'nob', 'lemma': 'fisk', 'pos': 'N'},
               {'lang': 'sme', 'lemma': 'guolli', 'pos': 'N'},
               {'lang': 'sma', 'lemma': 'guelie', 'pos': 'N'},
               {'lang': 'smn', 'lemma': 'kyeli', 'pos': 'N'},
               {'lang': 'fin', 'lemma': 'kala', 'pos': 'N'}
              ]
            }
          ],
          'lemma': 'guolle'
        },
        'type': 'FETCH_ARTICLES_SUCCESS'
      }
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchArticles(lemma)).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
