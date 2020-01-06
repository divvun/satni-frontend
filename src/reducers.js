import { combineReducers } from 'redux';
import articlesReducer from 'features/article/articleSlice';
import { search } from 'features/search/searchItemReducers';
import paradigmsReducer from 'features/paradigm/paradigmsSlice';

const rootReducer = combineReducers({
  articles: articlesReducer,
  search,
  paradigms: paradigmsReducer
});

export default rootReducer;
