import React from "react";
import { ApolloClient } from "@apollo/client";
import { useReactiveVar } from "@apollo/client/react";
import Button from "@mui/material/Button";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import * as Sentry from "@sentry/react";
import InterfaceLanguage from "./InterfaceLanguage";
import ProviderWrapper from "./ProviderWrapper";
import { darkModeVar } from "../apolloCache";

interface RootProps {
  client: ApolloClient;
}

const Root: React.FC<RootProps> = ({ client }) => {
  const darkMode = useReactiveVar(darkModeVar);

  const theme = React.useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            mode: darkMode ? "dark" : "light",
          },
          typography: {
            // Tell Material-UI what's the font-size on the html element is.
            htmlFontSize: 14,
          },
        })
      ),
    [darkMode]
  );

  return (
    // @ts-ignore - Sentry ErrorBoundary compatibility with React types
    <Sentry.ErrorBoundary
      fallback={({ error, resetError }) => (
        <>
          <div>You have encountered an error</div>
          <div>{error instanceof Error ? error.toString() : String(error)}</div>
          <Button
            color="primary"
            href="/"
            onClick={() => {
              resetError();
            }}
          >
            Click here to reset!
          </Button>
        </>
      )}
    >
      <ProviderWrapper client={client}>
        <ThemeProvider theme={theme}>
          <InterfaceLanguage />
        </ThemeProvider>
      </ProviderWrapper>
    </Sentry.ErrorBoundary>
  );
};

export default Root;
