import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

import AsyncApp from './AsyncApp';
import ErrorBoundary from '../components/ErrorBoundary';
import { resolvers, typeDefs } from '../resolvers';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: 'http://127.0.0.1:8000/graphql/',
  resolvers,
  typeDefs
});
cache.writeData({
  data: {
    wantedLangs: [
      'sma', 'sme', 'smj', 'smn', 'sms',
      'fin', 'nob', 'swe', 'nno',
      'eng', 'lat'
    ]
  }
});

// Add this after Provider
// <ErrorBoundary>
// </ErrorBoundary>

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <ApolloProvider client={client}>
        <AsyncApp />
      </ApolloProvider>
    </MuiThemeProvider>
  </Provider>
    );

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
