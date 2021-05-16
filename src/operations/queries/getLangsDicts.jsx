import { gql } from '@apollo/client';

const GET_LANGS_DICTS = gql`
  query GetLangsAndDicts {
    wantedDicts @client
    wantedLangs @client
  }
`;

export default GET_LANGS_DICTS;
