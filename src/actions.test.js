import * as actions from './actions';

describe('actions', () => {
  it('should create an action to set a selected lemma', () => {
    const lemma = 'guolle';
    const expectedAction = {
      type: actions.SELECT_LEMMA,
      lemma
    };
    expect(actions.selectLemma(lemma)).toEqual(expectedAction);
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

