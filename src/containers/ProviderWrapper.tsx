import React from 'react';
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
// @ts-ignore - React Router DOM v5 compatibility
import { BrowserRouter as Router } from 'react-router-dom';

interface ProviderWrapperProps {
  children: React.ReactNode;
  client: ApolloClient<NormalizedCacheObject>;
}

const ProviderWrapper: React.FC<ProviderWrapperProps> = ({
  children,
  client,
}) => (
  <ApolloProvider client={client}>
    {/* @ts-ignore - React Router DOM v5 compatibility */}
    <Router>{children}</Router>
  </ApolloProvider>
);

export default ProviderWrapper;
