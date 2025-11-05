import { gql } from "@apollo/client";

export interface GetThemePreferenceQuery {
  themePreference: "light" | "dark" | "system";
}

export const GET_THEME_PREFERENCE = gql`
  query GetThemePreference {
    themePreference @client
  }
`;
