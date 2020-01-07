import { combineReducers } from 'redux';
import articlesReducer from 'features/article/articleSlice';
import searchReducer from 'features/search/searchSlice';
import paradigmsReducer from 'features/paradigm/paradigmsSlice';

const rootReducer = combineReducers({
  articles: articlesReducer,
  search: searchReducer,
  paradigms: paradigmsReducer
});

export default rootReducer;
