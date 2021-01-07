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
    case FETCH_ARTICLES_FAILURE:
      return {};
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
          [stemToKey(action.payload.stem)]: paradigm(state[stemToKey(action.payload.lemma)], action)
        }
      };
    case FETCH_PARADIGM_SUCCESS:
      return {
        ...state,
        ...{
          isFetching: false,
          errorMessage: null,
          [stemToKey(action.payload.stem)]: paradigm(state[stemToKey(action.payload.lemma)], action)
        }
      };
    case FETCH_PARADIGM_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          errorMessage: action.payload.error,
          [stemToKey(action.payload.stem)]: paradigm(state[stemToKey(action.payload.lemma)], action)
        }
      };
    default:
      return state;
  }
};
