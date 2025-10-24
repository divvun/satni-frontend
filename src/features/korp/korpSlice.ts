/* eslint-disable no-param-reassign */
// Disabled because reduxjs takes care of mutability
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../../configureStore';
import doesLemmaExist from '../../api';

interface KorpState {
  isFetching: boolean;
  error: string | null;
  lemmaExists?: boolean;
}

interface KorpSuccessPayload {
  korp: boolean;
}

const initialState: KorpState = {
  isFetching: false,
  error: null,
};

const korpSlice = createSlice({
  name: 'korp',
  initialState,
  reducers: {
    getKorpStart(state) {
      state.isFetching = true;
    },
    getKorpSuccess(state, action: PayloadAction<KorpSuccessPayload>) {
      const { korp } = action.payload;
      state.lemmaExists = korp;
      state.isFetching = false;
      state.error = null;
    },
    getKorpFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export const { getKorpStart, getKorpSuccess, getKorpFailure } =
  korpSlice.actions;

export default korpSlice.reducer;

export const isLemmaInKorp = (language: string, lemma: string) => 
  async (dispatch: AppDispatch) => {
    try {
      dispatch(getKorpStart());
      const korp = await doesLemmaExist(language, lemma);
      dispatch(getKorpSuccess({ korp }));
    } catch (err) {
      dispatch(getKorpFailure(err instanceof Error ? err.message : String(err)));
    }
  };