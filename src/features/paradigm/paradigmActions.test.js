import * as actions from './paradigmActions';

describe('actions', () => {
  it('should create an action to request a paradigm for the given stem', () => {
    const stem = {lemma: 'guolle', pos: 'N', lang: 'smj'};
    const expectedAction = {
      type: actions.FETCH_PARADIGM_BEGIN,
      payload: {
        stem
      }
    };
    expect(actions.fetchParadigmBegin(stem)).toEqual(expectedAction);
  });

  it('should create a FETCH_PARADIGM_SUCCESS', () => {
    const stem = {lemma: 'guolle', pos: 'N', lang: 'smj'};
    const json = {
      guolle_N_smj: {
        'analyses': {
          'N+Sg+Nom': [
            'guolle'
          ],
          'N+Sg+Nom+PxSg1': [
            'guollám'
          ],
          'N+Sg+Nom+PxSg2': [
            'guollát'
          ],
          'N+Sg+Nom+PxDu1': [
            'guolláma'
          ]
        }
      }
    };
    const expectedAction = {
      type: actions.FETCH_PARADIGM_SUCCESS,
      payload: {
        stem,
        paradigm: json
      }
    };
    expect(actions.fetchParadigmSuccess(stem, json)).toEqual(expectedAction);
  });

  it('should create a FETCH_PARADIGM_FAILURE', () => {
    const stem = {lemma: 'guolle', pos: 'N', lang: 'smj'};
    const error = new Error('test error`');
    const expectedAction = {
      type: actions.FETCH_PARADIGM_FAILURE,
      payload: {
        stem,
        error
      }
    };
    expect(actions.fetchParadigmFailure(stem, error)).toEqual(expectedAction);
  });
});
