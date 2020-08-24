import korp, { getKorpStart, getKorpSuccess, getKorpFailure } from './korpSlice';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(korp(undefined, {})).toEqual({isFetching: false, error: null});
  });

  it('should handle FETCH_KORP_BEGIN', () => {
    expect(korp(undefined, {
      type: getKorpStart.type
    })).toEqual({
      error: null,
      isFetching: true
    });
  });

  it('should handle FETCH_KORP_FAILURE', () => {
    expect(korp(undefined, {
      type: getKorpFailure.type,
      payload: 'Error'
    })).toEqual({
      isFetching: false,
      error: 'Error'
    });
  });

  it('should handle FETCH_KORP_SUCCESS', () => {
    expect(korp(undefined, {
      type: getKorpSuccess.type,
      payload: {
        korp: true
      }
    })).toEqual({
      isFetching: false,
      error: null,
      lemmaExists: true
    });
  });
});
