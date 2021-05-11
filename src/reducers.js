/* eslint-disable import/no-extraneous-dependencies */
import { combineReducers } from 'redux'; // redux is a part of @reduxjs/toolkit
import korpReducer from './features/korp/korpSlice';

const rootReducer = combineReducers({
  korp: korpReducer,
});

export default rootReducer;
