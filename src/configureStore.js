import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const satniStore = configureStore({
  reducer: rootReducer
});

export default satniStore;
