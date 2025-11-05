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

// Import Gentium Plus font (excellent Sámi coverage with hooked ʼ)
import "@fontsource/gentium-plus/400.css"; // Regular
import "@fontsource/gentium-plus/700.css"; // Bold
import "@fontsource/gentium-plus/400-italic.css"; // Regular Italic
import "@fontsource/gentium-plus/700-italic.css"; // Bold Italic

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
            ...(darkMode && {
              primary: {
                main: "#64b5f6", // Brighter blue for better visibility in dark mode
              },
              secondary: {
                main: "#e1bee7", // Lighter purple for better visibility in dark mode
              },
            }),
          },
          typography: {
            // Tell Material-UI what's the font-size on the html element is.
            htmlFontSize: 14,
            // Set Gentium Plus as the global font with fallbacks
            fontFamily: ["Gentium Plus", "Georgia", "serif"].join(","),
          },
          components: {
            MuiLink: {
              styleOverrides: {
                root: {
                  ...(darkMode && {
                    color: "#64b5f6", // Bright blue for links in dark mode
                    "&:visited": {
                      color: "#e1bee7", // Light purple for visited links in dark mode
                    },
                  }),
                },
              },
            },
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
