import paradigms, { getParadigmSuccess, getParadigmFailure} from './paradigmsSlice';

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(paradigms(undefined, {})).toEqual({isFetching: false, error: null});
  });

  it('should handle FETCH_PARADIGM_SUCCESS', () => {
    const stem = {
      lemma: 'guolli',
      pos: 'N',
      language: 'sme'
    };
    const json = {
      'N+Sg+Nom': [
        'guolli'
      ],
      'N+Sg+Gen': [
        'guole',
        'guoli'
      ]
    };

    expect(paradigms({}, {
      type: getParadigmSuccess.type,
      payload: {stem, json}
    })).toEqual({
      isFetching: false,
      error: null,
      guolli_N_sme: json
    });
  });

  it('should handle FETCH_PARADIGM_FAILURE', () => {
    expect(paradigms({}, {
      type: getParadigmFailure.type,
      payload: 'uff'
    }
    )).toEqual({
      isFetching: false,
      error: 'uff'
    });
  });
});
