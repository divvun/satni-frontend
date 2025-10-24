import React from 'react';
import { ApolloClient } from '@apollo/client';
import Button from '@mui/material/Button';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from '@mui/material/styles';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
import * as Sentry from '@sentry/react';
import InterfaceLanguage from './InterfaceLanguage';
import ProviderWrapper from './ProviderWrapper';

interface RootProps {
  client: ApolloClient<any>;
}

const Root: React.FC<RootProps> = ({ client }) => (
  // @ts-ignore - Sentry ErrorBoundary compatibility with React types
  <Sentry.ErrorBoundary
    fallback={({ error, resetError }) => (
      <>
        <div>You have encountered an error</div>
        <div>{error.toString()}</div>
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
      <MuiThemeProvider
        theme={responsiveFontSizes(
          createTheme({
            typography: {
              // Tell Material-UI what's the font-size on the html element is.
              htmlFontSize: 14,
            },
          }),
        )}
      >
        <StylesThemeProvider
          theme={responsiveFontSizes(
            createTheme({
              typography: {
                htmlFontSize: 14,
              },
            }),
          )}
        >
          <InterfaceLanguage />
        </StylesThemeProvider>
      </MuiThemeProvider>
    </ProviderWrapper>
  </Sentry.ErrorBoundary>
);

export default Root;
