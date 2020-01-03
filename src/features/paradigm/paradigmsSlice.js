import { createSlice } from '@reduxjs/toolkit';
import { stemToKey } from 'utils';
import { fetchParadigm } from 'api';

const paradigmsSlice = createSlice({
  name: 'paradigms',
  initialState: {isFetching: false, error: null},
  reducers: {
    getParadigmSuccess (state, action) {
      const { stem, json } = action.payload;
      state[`${stemToKey(stem)}`] = json;
      state.isFetching = false;
      state.error = null;
    },
    getParadigmFailure (state, action) {
      state.isFetching = false;
      state.error = action.payload;
    }
  }
});

export const {
  getParadigmSuccess,
  getParadigmFailure
} = paradigmsSlice.actions;

export default paradigmsSlice.reducer;

export const fetchParadigms = (stem) => async dispatch => {
  try {
    const paradigm = await fetchParadigm(stem);
    dispatch(getParadigmSuccess(stem, paradigm));
  } catch (err) {
    dispatch(getParadigmsFailure(stem, err.toString()));
  }
};
