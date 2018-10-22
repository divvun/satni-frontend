import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AsyncApp from './AsyncApp';
import ErrorBoundary from '../components/ErrorBoundary';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <ErrorBoundary>
        <AsyncApp />
      </ErrorBoundary>
    </MuiThemeProvider>
  </Provider>
    );

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
