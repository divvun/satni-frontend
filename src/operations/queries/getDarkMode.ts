import { gql } from "@apollo/client";

export interface GetDarkModeQuery {
  darkMode: boolean;
}

export const GET_DARK_MODE = gql`
  query GetDarkMode {
    darkMode @client
  }
`;
