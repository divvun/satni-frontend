import React, { useState, useEffect } from 'react';
import * as Sentry from '@sentry/react';
import { gql, useQuery } from '@apollo/client';
import { I18nProvider } from '@lingui/react';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

import AsyncApp from './AsyncApp';
import ProviderWrapper from './ProviderWrapper';

async function loadMessages(language) {
  return await import(`@lingui/loader!locales/${language}/messages.po`);
}

export const GET_INTERFACE_LANGUAGE = gql`
  query GetInterfaceLanguage {
    interfaceLanguage @client
  }
`;

const InterfaceLanguage = () => {
  const {data, error, loading} = useQuery(GET_INTERFACE_LANGUAGE);
  if (loading) return <div>Loading language …</div>;
  if (error) return <div>Error: {JSON.stringify(error)}</div>;
  return <GivenInterface language={data.interfaceLanguage}/>;
};

const GivenInterface = ({language}) => {
  const [catalogs, setCatalogs] = useState({});

  const handleLanguageChange = async(language) => {
    const newCatalog = await loadMessages(language);
    setCatalogs(catalogs => ({ ...catalogs, [language]: newCatalog }));
  };

  useEffect(
    () => {
      const fetchCatalog = () => handleLanguageChange(language);
      fetchCatalog();
    },
    [language]
  );

  useEffect(
    () => {
      localStorage.setItem('interfaceLanguage', language);
    },
    [language]
  );

  return <I18nProvider
    language={language}
    catalogs={catalogs}
  >
    <AsyncApp/>
  </I18nProvider>;

};

GivenInterface.propTypes = {
  language: PropTypes.string.isRequired
};

const Root = ({ store, client }) => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error, resetError }) => (
        <React.Fragment>
          <div>You have encountered an error</div>
          <div>{error.toString()}</div>
          <Button
            color='primary'
            href='/'
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
  store: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired
};

export default Root;
