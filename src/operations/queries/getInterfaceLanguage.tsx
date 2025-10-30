import { gql } from '@apollo/client';

const GET_INTERFACE_LANGUAGE = gql`
  query GetInterfaceLanguage {
    interfaceLanguage @client
  }
`;

export default GET_INTERFACE_LANGUAGE;
