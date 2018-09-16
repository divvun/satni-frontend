import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AsyncApp from './AsyncApp';

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <AsyncApp />
    </MuiThemeProvider>
  </Provider>
    );

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
