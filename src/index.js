/* eslint-disable import/no-extraneous-dependencies */
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as Sentry from '@sentry/react';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import satniStore from './configureStore';
import apolloClient from './apolloClient';

import './Nds.css';
import 'bootstrap/dist/css/bootstrap.min.css';

Sentry.init({
  dsn: 'https://65960ebe11524e22b83637dfe43344a2@sentry.io/1303235',
});

render(
  <Root store={satniStore} client={apolloClient} />,
  document.getElementById('root'),
);
