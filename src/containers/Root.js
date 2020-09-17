import React, { useState, useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { I18nProvider } from '@lingui/react';
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import AsyncApp from './AsyncApp';
import ProviderWrapper from './ProviderWrapper';
import ErrorBoundary from 'components/ErrorBoundary';

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

const Root = ({ store, client }) => {
  return (
    <ProviderWrapper
      store={store}
      client={client}
    >
      <ErrorBoundary>
        <MuiThemeProvider theme={createMuiTheme()}>
          <InterfaceLanguage/>
        </MuiThemeProvider>
      </ErrorBoundary>
    </ProviderWrapper>
  );
};

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
