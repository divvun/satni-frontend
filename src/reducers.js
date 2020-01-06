import { combineReducers } from 'redux';

import { articlesByLemma } from './articleReducers';
import { search } from './searchItemReducers';
import { paradigmByStem } from 'features/paradigm/paradigmReducers';

const rootReducer = combineReducers({
  articlesByLemma,
  search
});

export default rootReducer;
