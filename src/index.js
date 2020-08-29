import 'core-js/stable';
import 'regenerator-runtime/runtime';

import * as Sentry from '@sentry/browser';
import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, ApolloProvider } from '@apollo/client';

import { cache } from 'apolloCache';
import Root from 'containers/Root';
import satniStore from 'configureStore';

Sentry.init({
  dsn: 'https://65960ebe11524e22b83637dfe43344a2@sentry.io/1303235'
});

const client = new ApolloClient({
  cache,
  uri: 'https://satni.uit.no/newsatni/'
});

render(
  <ApolloProvider
    client={client}>

    <Root store={satniStore} />
  </ApolloProvider>,
  document.getElementById('root')
);
