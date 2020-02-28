import { createSlice } from '@reduxjs/toolkit';
import { getArticles } from 'api';
import { normaliseArticles, toJson} from 'utils';

const articleSlice = createSlice({
  name: 'articles',
  initialState: {isFetching: false, error: null},
  reducers: {
    getArticlesStart (state) {
      state.isFetching = true;
    },
    getArticlesSuccess (state, action) {
      const {lemma, articles} = action.payload;
      state[lemma] = articles;
      state.isFetching = false;
      state.error = null;
    },
    getArticlesFailure (state, action) {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
});

export const {
  getArticlesStart,
  getArticlesSuccess,
  getArticlesFailure
} = articleSlice.actions;

export default articleSlice.reducer;

export const fetchArticles = (lemma) => async dispatch => {
  try {
    dispatch(getArticlesStart());
    const text = await getArticles(lemma);
    const articles = normaliseArticles(toJson(text));
    dispatch(getArticlesSuccess({lemma, articles}));
  } catch (err) {
    dispatch(getArticlesFailure(err.toString()));
  }
};
