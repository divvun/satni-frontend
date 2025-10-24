import speaker, {
  getTTSFailure,
  getTTSStart,
  getTTSSuccess,
  getTTSFromCache,
} from './speakerSlice';

describe('speaker reducers', () => {
  it('should return the initial state', () => {
    expect(speaker(undefined, {} as any)).toEqual({
      isFetching: false,
      error: null,
      audioUrl: null,
      cache: {},
    });
  });

  it('should handle FETCH_TTS_BEGIN', () => {
    expect(
      speaker(undefined, {
        type: getTTSStart.type,
      } as any),
    ).toEqual({
      error: null,
      isFetching: true,
      audioUrl: null,
      cache: {},
    });
  });

  it('should handle FETCH_TTS_FAILURE', () => {
    expect(
      speaker(undefined, {
        type: getTTSFailure.type,
        payload: 'Error',
      } as any),
    ).toEqual({
      isFetching: false,
      error: 'Error',
      audioUrl: null,
      cache: {},
    });
  });

  it('should handle FETCH_TTS_SUCCESS', () => {
    expect(
      speaker(undefined, {
        type: getTTSSuccess.type,
        payload: {
          audioUrl: 'blob:http://example.com/audio',
          cacheKey: 'sme:default:mun',
        },
      } as any),
    ).toEqual({
      isFetching: false,
      error: null,
      audioUrl: 'blob:http://example.com/audio',
      cache: {
        'sme:default:mun': 'blob:http://example.com/audio',
      },
    });
  });

  it('should not cache null audioUrl', () => {
    expect(
      speaker(undefined, {
        type: getTTSSuccess.type,
        payload: {
          audioUrl: null,
          cacheKey: 'fin:default:hello',
        },
      } as any),
    ).toEqual({
      isFetching: false,
      error: null,
      audioUrl: null,
      cache: {},
    });
  });

  it('should handle FETCH_TTS_FROM_CACHE', () => {
    expect(
      speaker(undefined, {
        type: getTTSFromCache.type,
        payload: 'blob:http://example.com/cached',
      } as any),
    ).toEqual({
      isFetching: false,
      error: null,
      audioUrl: 'blob:http://example.com/cached',
      cache: {},
    });
  });

  it('should cache multiple TTS results', () => {
    const state1 = speaker(undefined, {
      type: getTTSSuccess.type,
      payload: {
        audioUrl: 'blob:http://example.com/audio1',
        cacheKey: 'sme:default:mun',
      },
    } as any);

    const state2 = speaker(state1, {
      type: getTTSSuccess.type,
      payload: {
        audioUrl: 'blob:http://example.com/audio2',
        cacheKey: 'sma:default:dïhte',
      },
    } as any);

    expect(state2).toEqual({
      isFetching: false,
      error: null,
      audioUrl: 'blob:http://example.com/audio2',
      cache: {
        'sme:default:mun': 'blob:http://example.com/audio1',
        'sma:default:dïhte': 'blob:http://example.com/audio2',
      },
    });
  });
});
