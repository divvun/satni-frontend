import search, { getSearchItemsStart, getSearchItemsSuccess, getSearchItemsFailure } from './searchSlice';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(search(undefined, {})).toEqual({isFetching: false, error: null});
  });

  it('should handle FETCH_SEARCHITEMS_BEGIN', () => {
    expect(search(undefined, {
      type: getSearchItemsStart.type
    })).toEqual({
      error: null,
      isFetching: true
    });
  });

  it('should handle FETCH_SEARCHITEMS_FAILURE', () => {
    expect(search(undefined, {
      type: getSearchItemsFailure.type,
      payload: 'Error'
    })).toEqual({
      isFetching: false,
      error: 'Error'
    });
  });

  it('should handle FETCH_SEARCHITEMS_SUCCESS', () => {
    const receivedItems = [
      { term: 'guollebuktin', dict: 'smenob', lang: 'sme', langs: 'nob' },
      { term: 'guolleguhppár', dict: 'smenob', lang: 'sme', langs: 'nob' },
      { term: 'guolljut', dict: 'smefin', lang: 'sme', langs: 'fin' },
      { term: 'guollegáhkku', dict: 'smefin', lang: 'sme', langs: 'fin' }
    ];

    expect(search(undefined, {
      type: getSearchItemsSuccess.type,
      payload: {
        key: 'guol',
        searchItems: receivedItems
      }
    })).toEqual({
      isFetching: false,
      error: null,
      'guol': [
        'guollebuktin',
        'guollegáhkku',
        'guolleguhppár',
        'guolljut'
      ]
    });
  });
});
