/* eslint-disable import/no-extraneous-dependencies */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as Sentry from '@sentry/react';
import ReactDOM from 'react-dom';
import apolloClient from './apolloClient';
import satniStore from './configureStore';
import Root from './containers/Root';

Sentry.init({
  dsn: 'https://65960ebe11524e22b83637dfe43344a2@sentry.io/1303235',
});

// @ts-expect-error - React 17 API with React 19 types mismatch
ReactDOM.render(
  <Root store={satniStore} client={apolloClient} />,
  document.getElementById('root'),
);
