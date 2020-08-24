import { createSlice } from '@reduxjs/toolkit';
import { doesLemmaExist } from 'api';

const korpSlice = createSlice({
  name: 'korp',
  initialState: {isFetching: false, error: null},
  reducers: {
    getKorpStart (state) {
      state.isFetching = true;
    },
    getKorpSuccess (state, action) {
      const { korp } = action.payload;
      state.lemmaExists = korp;
      state.isFetching = false;
      state.error = null;
    },
    getKorpFailure (state, action) {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
});

export const {
  getKorpStart,
  getKorpSuccess,
  getKorpFailure
} = korpSlice.actions;

export default korpSlice.reducer;

export const isLemmaInKorp = (language, lemma) => async dispatch => {
  try {
    dispatch(getKorpStart());
    const korp = await doesLemmaExist(language, lemma);
    dispatch(getKorpSuccess({korp}));
  } catch (err) {
    dispatch(getKorpFailure(err.toString()));
  }
};
