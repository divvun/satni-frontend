import { ApolloClient, ApolloLink, HttpLink } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { cache } from './apolloCache';

const paradigmLink = new RestLink({
  uri: 'http://gtweb.uit.no/cgi-bin/smi/',
});

const SATNI_ENDPOINT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/graphql/'
    : 'https://satni.uit.no/newsatni/';
const dictLink = new HttpLink({ uri: SATNI_ENDPOINT });
const link = ApolloLink.from([paradigmLink, dictLink]);

const apolloClient = new ApolloClient({
  cache,
  link,
});

export default apolloClient;
