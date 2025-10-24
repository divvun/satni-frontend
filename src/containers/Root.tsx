import React from 'react';
import { ApolloClient } from '@apollo/client';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Button from '@material-ui/core/Button';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import * as Sentry from '@sentry/react';
import { Store } from 'redux';
import InterfaceLanguage from './InterfaceLanguage';
import ProviderWrapper from './ProviderWrapper';

interface RootProps {
  store: Store;
  client: ApolloClient<any>;
}

const Root: React.FC<RootProps> = ({ store, client }) => (
  // @ts-ignore - Sentry ErrorBoundary compatibility with React types
  <Sentry.ErrorBoundary
    fallback={({ error, resetError }) => (
      <>
        <div>You have encountered an error</div>
        <div>{error.toString()}</div>
        {/* @ts-ignore - Material-UI v4 compatibility */}
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
    <ProviderWrapper store={store} client={client}>
      <MuiThemeProvider
        theme={responsiveFontSizes(
          createMuiTheme({
            typography: {
              // Tell Material-UI what's the font-size on the html element is.
              htmlFontSize: 14,
            },
          }),
        )}
      >
        <InterfaceLanguage />
      </MuiThemeProvider>
    </ProviderWrapper>
  </Sentry.ErrorBoundary>
);

export default Root;
