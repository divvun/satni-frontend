import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { Provider } from 'react-redux';
// @ts-ignore - React Router DOM v5 compatibility
import { BrowserRouter as Router } from 'react-router-dom';
import { Store } from '@reduxjs/toolkit';

interface ProviderWrapperProps {
  children: React.ReactNode;
  store: Store;
  client: ApolloClient<NormalizedCacheObject>;
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({
  children,
  store,
  client,
}) => (
  <ApolloProvider client={client}>
    {/* @ts-ignore - React Redux Provider types compatibility */}
    <Provider store={store}>
      {/* @ts-ignore - React Router DOM v5 compatibility */}
      <Router>{children}</Router>
    </Provider>
  </ApolloProvider>
);

export default ProviderWrapper;
