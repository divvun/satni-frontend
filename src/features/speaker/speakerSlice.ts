/* eslint-disable no-param-reassign */
// Disabled because reduxjs takes care of mutability
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../../configureStore';
import { fetchTTSAudio } from './speakerApi';

interface TTSCache {
  [key: string]: string; // key format: "language:voice:text" -> audioUrl
}

interface SpeakerState {
  isFetching: boolean;
  error: string | null;
  audioUrl: string | null;
  cache: TTSCache;
}

interface TTSSuccessPayload {
  audioUrl: string | null;
  cacheKey: string;
}

const initialState: SpeakerState = {
  isFetching: false,
  error: null,
  audioUrl: null,
  cache: {},
};

const speakerSlice = createSlice({
  name: 'speaker',
  initialState,
  reducers: {
    getTTSStart(state) {
      state.isFetching = true;
    },
    getTTSSuccess(state, action: PayloadAction<TTSSuccessPayload>) {
      const { audioUrl, cacheKey } = action.payload;
      state.audioUrl = audioUrl;
      if (audioUrl) {
        state.cache[cacheKey] = audioUrl;
      }
      state.isFetching = false;
      state.error = null;
    },
    getTTSFailure(state, action: PayloadAction<string>) {
      state.isFetching = false;
      state.error = action.payload;
    },
    getTTSFromCache(state, action: PayloadAction<string>) {
      state.audioUrl = action.payload;
      state.isFetching = false;
      state.error = null;
    },
  },
});

export const {
  getTTSStart,
  getTTSSuccess,
  getTTSFailure,
  getTTSFromCache,
} = speakerSlice.actions;

export default speakerSlice.reducer;

const createCacheKey = (
  text: string,
  language: string,
  voice: string | null,
): string => `${language}:${voice || 'default'}:${text}`;

export const fetchCachedTTSAudio = (
  text: string,
  language: string,
  voice: string | null = null,
) => async (dispatch: AppDispatch, getState: () => RootState) => {
  const cacheKey = createCacheKey(text, language, voice);
  const state = getState();
  const cachedResult = state.speaker?.cache[cacheKey];

  // Return cached result if available
  if (cachedResult !== undefined) {
    dispatch(getTTSFromCache(cachedResult));
    return cachedResult;
  }

  // Fetch from API if not cached
  try {
    dispatch(getTTSStart());
    const audioUrl = await fetchTTSAudio(text, language, voice);
    dispatch(getTTSSuccess({ audioUrl, cacheKey }));
    return audioUrl;
  } catch (err) {
    dispatch(getTTSFailure(err instanceof Error ? err.message : String(err)));
    return null;
  }
};
