import { ApolloClient } from '@apollo/client';
import Button from '@material-ui/core/Button';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import * as Sentry from '@sentry/react';
import PropTypes from 'prop-types';
import InterfaceLanguage from './InterfaceLanguage';
import ProviderWrapper from './ProviderWrapper';

const Root = ({ store, client }) => (
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

Root.propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }).isRequired,
  client: PropTypes.instanceOf(ApolloClient).isRequired,
};

export default Root;
