import { ApolloClient, ApolloLink, HttpLink } from '@apollo/client';
import { cache } from './apolloCache';

const SATNI_ENDPOINT: string =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8000/graphql/'
    : 'https://satni.uit.no/newsatni/';

const dictLink = new HttpLink({ uri: SATNI_ENDPOINT });
const link = ApolloLink.from([dictLink]);

const apolloClient = new ApolloClient({
  cache,
  link,
});

export default apolloClient;