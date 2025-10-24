/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'; // redux is a part of @reduxjs/toolkit
import korpReducer from './features/korp/korpSlice';

const rootReducer = combineReducers({
  korp: korpReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
