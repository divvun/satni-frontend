import { ApolloClient, ApolloLink, HttpLink } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';
import { cache } from './apolloCache';

const paradigmLink = new RestLink({
  uri: 'http://gtweb.uit.no/cgi-bin/smi/',
});

const dictLink = new HttpLink({ uri: 'https://satni.uit.no/newsatni/' });
const link = ApolloLink.from([paradigmLink, dictLink]);

const apolloClient = new ApolloClient({
  cache,
  link,
});

export default apolloClient;
