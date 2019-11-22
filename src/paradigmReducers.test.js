import * as actions from './paradigmActions';

describe('actions', () => {
  it('should create an action to request a paradigm for the given stem', () => {
    const stem = {lemma: 'guolle', pos: 'N', lang: 'smj'};
    const expectedAction = {
      type: actions.FETCH_PARADIGM_REQUEST,
      stem
    };
    expect(actions.requestParadigm(stem)).toEqual(expectedAction);
  });
});
