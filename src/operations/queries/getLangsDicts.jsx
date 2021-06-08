import { gql } from '@apollo/client';

const GET_LANGS_DICTS = gql`
  query GetLangsAndDicts {
    wantedDicts @client
    srcLangs @client
    targetLangs @client
  }
`;

export default GET_LANGS_DICTS;
