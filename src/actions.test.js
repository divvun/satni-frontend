import * as actions from './actions';
import {Set} from 'immutable';

describe('actions', () => {
  it('should create an action to set a selected lemma', () => {
    const lemma = 'guolle';
    const expectedAction = {
      type: actions.SELECT_LEMMA,
      lemma
    };
    expect(actions.selectLemma(lemma)).toEqual(expectedAction);
  });

  it('should create an action to set the search key', () => {
    const key = 'guo';
    const expectedAction = {
      type: actions.SELECT_KEY,
      key
    };
    expect(actions.selectKey(key)).toEqual(expectedAction);
  });

  it('should create an action to request dictionary and term articles for the given lemma', () => {
    const lemma = 'guolle';
    const expectedAction = {
      type: actions.REQUEST_ARTICLES,
      lemma
    };
    expect(actions.requestArticles(lemma)).toEqual(expectedAction);
  });

  it('should create an action to request search items for the given key', () => {
    const key = 'guolle';
    const expectedAction = {
      type: actions.REQUEST_ITEMS
    };
    expect(actions.requestItems(key)).toEqual(expectedAction);
  });

  it('should create an action to receive articles as text for the given lemma', () => {
    const lemma = 'guolle';
    const json = {'key': 'value'};
    const expectedAction = {
      type: actions.RECEIVE_ARTICLES,
      lemma,
      articles: json
    };
    expect(actions.receiveArticles(lemma, json))
      .toEqual(expectedAction);
  });

  it('should create an action to receive search items as text for the given lemma', () => {
    const key = 'guolle';
    const json = {'key': 'value'};
    const expectedAction = {
      type: actions.RECEIVE_ITEMS,
      key,
      searchItems: json
    };
    expect(actions.receiveItems(key, json))
      .toEqual(expectedAction);
  });
});

describe('test conditions for fetching articles', () => {
  it('If lemma is empty, do not fetch articles', () => {
    const lemma = '';
    const state = {articlesByLemma: {}};
    expect(actions.shouldFetchArticles(state, lemma)).toEqual(false);
  });

  it('If lemma is set and no articles have been cached, fetch articles', () => {
    const lemma = 'guolle';
    const state = {articlesByLemma: {}};
    expect(actions.shouldFetchArticles(state, lemma)).toEqual(true);
  });

  it('If lemma is set and the app is fetching articles, do not try to fetch articles', () => {
    const lemma = 'guolle';
    const state = {
      articlesByLemma: {
        'guolle': {isFetching: true}
      }
    };
    expect(actions.shouldFetchArticles(state, lemma)).toEqual(false);
  });

  it('If lemma is set and the app is not fetching articles, and articles have been cached, do not try to fetch articles', () => {
    const lemma = 'guolle';
    const state = {
      articlesByLemma: {
        'guolle': {
          isFetching: false,
          items: [
            {key: 'value'}
          ]
        }
      }
    };
    expect(actions.shouldFetchArticles(state, lemma)).toEqual(false);
  });

  it('map object to array', () => {
    const data = {
      a: true,
      b: false,
      c: true
    };

    const mapTrue = (data) => {
      return Object.keys(data).filter((key) => {
        return data[key];
      });
    };
    expect(mapTrue(data)).toEqual(['a', 'c']);
  });
});

describe('test conditions for fetching search items', () => {
  it('If key is among usedSearchKeys, do not fetch search items', () => {
    const key = 'guo';
    const state = { usedSearchKeys: Set.of('guo')};
    expect(actions.shouldFetchItems(state, key)).toEqual(false);
  });

  it('If key is not among usedSearchKeys, fetch search items', () => {
    const key = 'guol';
    const state = { usedSearchKeys: Set.of('guo')};
    expect(actions.shouldFetchItems(state, key)).toEqual(true);
  });
});
