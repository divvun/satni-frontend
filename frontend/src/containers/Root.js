import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { useCookies } from 'react-cookie';
import { I18nProvider } from '@lingui/react';

import AsyncApp from './AsyncApp';
import ErrorBoundary from 'components/ErrorBoundary';

import catalogSe from 'locales/se/messages.js';
import catalogNb from 'locales/nb/messages.js';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: 'http://127.0.0.1:8000/graphql/'
});

// Add this after Provider
// <ErrorBoundary>
// </ErrorBoundary>

const catalogs = {
  nb: catalogNb,
  se: catalogSe
};
const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <I18nProvider language='se' catalogs={catalogs}>
        <MuiThemeProvider>
          <ApolloProvider client={client}>
            <AsyncApp />
          </ApolloProvider>
        </MuiThemeProvider>
      </I18nProvider>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
