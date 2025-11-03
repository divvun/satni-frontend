import React from "react";
import { ApolloClient } from "@apollo/client";
import Button from "@mui/material/Button";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import * as Sentry from "@sentry/react";
import InterfaceLanguage from "./InterfaceLanguage";
import ProviderWrapper from "./ProviderWrapper";

interface RootProps {
  client: ApolloClient;
}

const Root: React.FC<RootProps> = ({ client }) => (
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
      <ThemeProvider
        theme={responsiveFontSizes(
          createTheme({
            typography: {
              // Tell Material-UI what's the font-size on the html element is.
              htmlFontSize: 14,
            },
          })
        )}
      >
        <InterfaceLanguage />
      </ThemeProvider>
    </ProviderWrapper>
  </Sentry.ErrorBoundary>
);

export default Root;
