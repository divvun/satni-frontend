import { combineReducers } from 'redux';
import articlesReducer from 'features/article/articleSlice';
import searchReducer from 'features/search/searchSlice';
import paradigmsReducer from 'features/paradigm/paradigmsSlice';
import korpReducer from 'features/korp/korpSlice';

const rootReducer = combineReducers({
  articles: articlesReducer,
  search: searchReducer,
  paradigms: paradigmsReducer,
  korp: korpReducer
});

export default rootReducer;
