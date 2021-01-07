import { combineReducers } from 'redux';

import { articlesByLemma } from './articleReducers';
import { search } from './searchItemReducers';

const rootReducer = combineReducers({
  articlesByLemma,
  search
});

export default rootReducer;
