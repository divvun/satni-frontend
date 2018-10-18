import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);
