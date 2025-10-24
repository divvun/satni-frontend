import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const satniStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof satniStore.getState>;
export type AppDispatch = typeof satniStore.dispatch;

export default satniStore;
