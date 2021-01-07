import * as actions from './actions';
import {Set} from 'immutable';

describe('actions', () => {
  it('should create an action to set the search key', () => {
    const key = 'guo';
    const expectedAction = {
      type: actions.SELECT_KEY,
      key
    };
    expect(actions.selectKey(key)).toEqual(expectedAction);
  });

  it('should create an action to request search items for the given key', () => {
    const key = 'guolle';
    const expectedAction = {
      type: actions.REQUEST_ITEMS
    };
    expect(actions.requestItems(key)).toEqual(expectedAction);
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
