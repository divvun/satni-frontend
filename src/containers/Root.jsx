import React from 'react';
import * as Sentry from '@sentry/react';
import { ApolloClient } from '@apollo/client';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import ProviderWrapper from './ProviderWrapper';
import InterfaceLanguage from './InterfaceLanguage';

const Root = ({ store, client }) => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, resetError }) => (
        <React.Fragment>
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
        </React.Fragment>
      )}
    >
      <ProviderWrapper store={store} client={client}>
        <MuiThemeProvider theme={createMuiTheme()}>
          <InterfaceLanguage />
        </MuiThemeProvider>
      </ProviderWrapper>
    </Sentry.ErrorBoundary>
  );
};

Root.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
  client: PropTypes.instanceOf(ApolloClient).isRequired,
};

export default Root;
