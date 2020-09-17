import { ApolloClient } from '@apollo/client';

import { cache } from 'apolloCache';

const apolloClient = new ApolloClient({
  cache,
  uri: 'https://satni.uit.no/newsatni/'
});

export default apolloClient;
