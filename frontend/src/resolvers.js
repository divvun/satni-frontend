import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

export const typeDefs = gql`
  extend type Query {
    wantedLangs: [String!]!
  }
`;

export const GET_WANTED_LANGS = gql`
  query GetWantedLangs {
    wantedLangs @client
  }
`;

export const resolvers = {};
