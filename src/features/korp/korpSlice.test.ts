import korp, {
  getKorpFailure,
  getKorpStart,
  getKorpSuccess,
  getKorpFromCache,
} from './korpSlice';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(korp(undefined, {} as any)).toEqual({
      isFetching: false,
      error: null,
      cache: {},
    });
  });

  it('should handle FETCH_KORP_BEGIN', () => {
    expect(
      korp(undefined, {
        type: getKorpStart.type,
      } as any),
    ).toEqual({
      error: null,
      isFetching: true,
      cache: {},
    });
  });

  it('should handle FETCH_KORP_FAILURE', () => {
    expect(
      korp(undefined, {
        type: getKorpFailure.type,
        payload: 'Error',
      } as any),
    ).toEqual({
      isFetching: false,
      error: 'Error',
      cache: {},
    });
  });

  it('should handle FETCH_KORP_SUCCESS', () => {
    expect(
      korp(undefined, {
        type: getKorpSuccess.type,
        payload: {
          korp: true,
          cacheKey: 'sme:muorra',
        },
      } as any),
    ).toEqual({
      isFetching: false,
      error: null,
      lemmaExists: true,
      cache: {
        'sme:muorra': true,
      },
    });
  });

  it('should handle FETCH_KORP_FROM_CACHE', () => {
    expect(
      korp(undefined, {
        type: getKorpFromCache.type,
        payload: true,
      } as any),
    ).toEqual({
      isFetching: false,
      error: null,
      lemmaExists: true,
      cache: {},
    });
  });

  it('should cache multiple lemma results', () => {
    const state1 = korp(undefined, {
      type: getKorpSuccess.type,
      payload: {
        korp: true,
        cacheKey: 'sme:muorra',
      },
    } as any);

    const state2 = korp(state1, {
      type: getKorpSuccess.type,
      payload: {
        korp: false,
        cacheKey: 'sma:tjidtjie',
      },
    } as any);

    expect(state2).toEqual({
      isFetching: false,
      error: null,
      lemmaExists: false,
      cache: {
        'sme:muorra': true,
        'sma:tjidtjie': false,
      },
    });
  });
});
