import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import AsyncApp from './AsyncApp';
import ErrorBoundary from '../components/ErrorBoundary';

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql/'
});

// client
//   .query({
//     query: gql`
//       {
//         lemmas(search: "lim") {
//           lemma
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider>
      <ErrorBoundary>
        <ApolloProvider client={client}>
          <AsyncApp />
        </ApolloProvider>
      </ErrorBoundary>
    </MuiThemeProvider>
  </Provider>
    );

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
