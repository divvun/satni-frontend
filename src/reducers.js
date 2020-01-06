import { combineReducers } from 'redux';
import { articlesByLemma } from './articleReducers';
import { search } from './searchItemReducers';
import paradigmsReducer from 'features/paradigm/paradigmsSlice';

const rootReducer = combineReducers({
  articlesByLemma,
  search,
  paradigms: paradigmsReducer
});

export default rootReducer;
