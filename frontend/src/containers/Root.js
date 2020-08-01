import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { I18nProvider } from '@lingui/react';

import AsyncApp from './AsyncApp';
import ErrorBoundary from 'components/ErrorBoundary';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: '/graphql/'
});

// Add this after Provider
// <ErrorBoundary>
// </ErrorBoundary>

async function loadMessages(language) {
  console.log('root', 22, language);
  return await import(`@lingui/loader!locales/${language}/messages.po`);
}

const Root = ({ store }) => {
  const [catalogs, setCatalogs] = useState({});
  const [language, setLanguage] = useState('se');

  useEffect(
    () => {
      const fetchCatalog = async() => {
        const newCatalog = await loadMessages(language);
        const newCatalogs = { ...catalogs, [language]: newCatalog };
        console.log('ahand', 34, language);
        setCatalogs(newCatalogs);
      }

      fetchCatalog()
    },
    [language]
  )

  const handleLanguageChange = (language) => {
    setLanguage(language);
  }

  return (
    <Provider store={store}>
      <I18nProvider
        language={language}
        catalogs={catalogs}>
        <MuiThemeProvider>
          <ApolloProvider
            client={client}>
            <AsyncApp
              language={language}
              onLanguageChange={handleLanguageChange}/>
          </ApolloProvider>
        </MuiThemeProvider>
      </I18nProvider>
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
