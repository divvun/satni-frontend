/* eslint-disable no-param-reassign */
// Disabled because reduxjs takes care of mutability
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../configureStore';
import doesLemmaExist from '../../api';

interface KorpCache {
  [key: string]: boolean; // key format: "language:lemma"
}

interface KorpState {
  isFetching: boolean;
  error: string | null;
  lemmaExists?: boolean;
  cache: KorpCache;
}

interface KorpSuccessPayload {
  korp: boolean;
  cacheKey: string;
}

const initialState: KorpState = {
  isFetching: false,
  error: null,
  cache: {},
};

const korpSlice = createSlice({
  name: 'korp',
  initialState,
  reducers: {
    getKorpStart(state) {
      state.isFetching = true;
    },
    getKorpSuccess(state, action: PayloadAction<KorpSuccessPayload>) {
      const { korp, cacheKey } = action.payload;
      state.lemmaExists = korp;
      state.cache[cacheKey] = korp;
      state.isFetching = false;
      state.error = null;
    },
    getKorpFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
    getKorpFromCache(state, action: PayloadAction<boolean>) {
      state.lemmaExists = action.payload;
      state.isFetching = false;
      state.error = null;
    },
  },
});

export const {
  getKorpStart,
  getKorpSuccess,
  getKorpFailure,
  getKorpFromCache,
} = korpSlice.actions;

export default korpSlice.reducer;

const createCacheKey = (language: string, lemma: string): string =>
  `${language}:${lemma}`;

export const isLemmaInKorp = (language: string, lemma: string) => async (
  dispatch: AppDispatch,
  getState: () => RootState,
) => {
  const cacheKey = createCacheKey(language, lemma);
  const state = getState();
  const cachedResult = state.korp.cache[cacheKey];

  // Return cached result if available
  if (cachedResult !== undefined) {
    dispatch(getKorpFromCache(cachedResult));
    return;
  }

  // Fetch from API if not cached
  try {
    dispatch(getKorpStart());
    const korp = await doesLemmaExist(language, lemma);
    dispatch(getKorpSuccess({ korp, cacheKey }));
  } catch (err) {
    dispatch(getKorpFailure(err instanceof Error ? err.message : String(err)));
  }
};
