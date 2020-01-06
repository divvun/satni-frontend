import { combineReducers } from 'redux';
import articlesReducer from 'features/article/articleSlice';
import { search } from './searchItemReducers';
import paradigmsReducer from 'features/paradigm/paradigmsSlice';

const rootReducer = combineReducers({
  articles: articlesReducer,
  search,
  paradigms: paradigmsReducer
});

export default rootReducer;
