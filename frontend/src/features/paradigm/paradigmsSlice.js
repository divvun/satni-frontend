import { createSlice } from '@reduxjs/toolkit';
import { stemToKey } from 'utils';
import { fetchParadigm } from 'api';

const paradigmsSlice = createSlice({
  name: 'paradigms',
  initialState: {isFetching: false, error: null},
  reducers: {
    getParadigmStart (state) {
      state.isFetching = true;
    },
    getParadigmSuccess (state, action) {
      const { stem, paradigm } = action.payload;
      state[`${stemToKey(stem)}`] = paradigm;
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
  getParadigmStart,
  getParadigmSuccess,
  getParadigmFailure
} = paradigmsSlice.actions;

export default paradigmsSlice.reducer;

export const fetchParadigms = (stem) => async dispatch => {
  try {
    dispatch(getParadigmStart());
    const paradigm = await fetchParadigm(stem);
    dispatch(getParadigmSuccess({stem, paradigm}));
  } catch (err) {
    dispatch(getParadigmFailure(err.toString()));
  }
};
