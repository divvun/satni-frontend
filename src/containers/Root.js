import React, { useState, useEffect } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { I18nProvider } from '@lingui/react';
import { Provider } from 'react-redux';
import { useCookies } from 'react-cookie';
import { 
  createMuiTheme, 
  ThemeProvider as MuiThemeProvider 
} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import { availableDicts, availableLanguages } from 'utils';
import AsyncApp from './AsyncApp';
import ErrorBoundary from 'components/ErrorBoundary';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  uri: 'https://satni.uit.no/newsatni/'
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
      const fetchCatalog = () => handleLanguageChange(language);

      fetchCatalog();
    },
    [language]
  );

  const [cookies, setCookie] = useCookies(['wantedLangs', 'wantedDicts']);
  if (cookies.wantedDicts === undefined) {
    setCookie('wantedDicts', availableDicts);
  }

  if (cookies.wantedLangs === undefined) {
    setCookie('wantedLangs', availableLanguages);
  }


  const handleLanguageChange = async(language) => {
    const newCatalog = await loadMessages(language);
    setLanguage(language);
    setCatalogs(catalogs => ({ ...catalogs, [language]: newCatalog }));
  };

  return (
    <Provider store={store}>
      <I18nProvider
        language={language}
        catalogs={catalogs}>
        <MuiThemeProvider theme={createMuiTheme()}>
          <ApolloProvider
            client={client}>
            <Router>
              <AsyncApp
                language={language}
                onLanguageChange={handleLanguageChange}/>
            </Router>
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
