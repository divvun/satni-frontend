import React from 'react';
import { ApolloProvider, ApolloClient } from '@apollo/client';
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
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
  client: PropTypes.instanceOf(ApolloClient).isRequired,
};

export default ProviderWrapper;
