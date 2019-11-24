import { paradigmByStem } from './paradigmReducers'
import * as actions from './paradigmActions'

const initialState = {
  error: null,
  isFetching: false
}

describe('reducers', () => {
  it('should return the initial state', () => {
    expect(paradigmByStem(undefined, {})).toEqual(initialState);
  });
})
