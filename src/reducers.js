import { combineReducers } from 'redux';
import korpReducer from 'features/korp/korpSlice';

const rootReducer = combineReducers({
  korp: korpReducer,
});

export default rootReducer;
