import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/react';
import { ApolloClient, useQuery } from '@apollo/client';
import { I18nProvider } from '@lingui/react';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import AsyncApp from './AsyncApp';
import ProviderWrapper from './ProviderWrapper';
import GET_INTERFACE_LANGUAGE from '../operations/queries/getInterfaceLanguage';

async function loadMessages(language) {
  return import(`@lingui/loader!locales/${language}/messages.po`);
}

const InterfaceLanguage = () => {
  const interfaceLanguageQueryResult = useQuery(GET_INTERFACE_LANGUAGE);
  const { interfaceLanguage } = interfaceLanguageQueryResult.data;
  const [catalogs, setCatalogs] = useState({});

  const handleLanguageChange = async (lang) => {
    const newCatalog = await loadMessages(lang);
    setCatalogs((cats) => ({ ...cats, [lang]: newCatalog }));
  };

  useEffect(() => {
    const fetchCatalog = () => handleLanguageChange(interfaceLanguage);
    fetchCatalog();
  }, [interfaceLanguage]);

  useEffect(() => {
    localStorage.setItem('interfaceLanguage', interfaceLanguage);
  }, [interfaceLanguage]);

  return (
    <I18nProvider language={interfaceLanguage} catalogs={catalogs}>
      <AsyncApp />
    </I18nProvider>
  );
};

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
