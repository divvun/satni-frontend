import { stemToKey } from './utils';
import {
  FETCH_PARADIGM_BEGIN,
  FETCH_PARADIGM_SUCCESS,
  FETCH_PARADIGM_FAILURE
} from './paradigmActions';

const paradigm = (
  state = {},
  action
) => {
  switch (action.type) {
    case FETCH_PARADIGM_SUCCESS:
      return action.payload.paradigm;
    default:
      return state;
  }
};

const initialState = {
  error: null,
  isFetching: false
};

export const paradigmByStem = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PARADIGM_BEGIN:
      return {
        ...state,
        ...{
          isFetching: true,
          errorMessage: null,
          [stemToKey(action.payload.stem)]: paradigm(state[stemToKey(action.payload.stem)], action)
        }
      };
    case FETCH_PARADIGM_SUCCESS:
      return {
        ...state,
        ...{
          isFetching: false,
          errorMessage: null,
          [stemToKey(action.payload.stem)]: paradigm(state[stemToKey(action.payload.stem)], action)
        }
      };
    case FETCH_PARADIGM_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          errorMessage: action.payload.error,
          [stemToKey(action.payload.stem)]: {}
        }
      };
    default:
      return state;
  }
};
