import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProviderWrapper = ({ children, store, client }) => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router>{children}</Router>
    </Provider>
  </ApolloProvider>
);

ProviderWrapper.propTypes = {
  children: PropTypes.arrayOf.isRequired,
  store: PropTypes.shape.isRequired,
  client: PropTypes.shape.isRequired,
};

export default ProviderWrapper;
