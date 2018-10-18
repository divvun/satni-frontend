import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

const configureStore = (preloadedState) => {
  const middlewares = [thunkMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(loggerMiddleware);
  }

  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
};

export default configureStore;
