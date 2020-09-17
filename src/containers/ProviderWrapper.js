import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

const ProviderWrapper = ({ children, store, client }) => (
  <ApolloProvider
    client={client}
  >
    <Provider
      store={store}
    >
      <Router>
        { children }
      </Router>
    </Provider>
  </ApolloProvider>
);

export default ProviderWrapper;
