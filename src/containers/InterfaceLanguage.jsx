/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { I18nProvider } from '@lingui/react';
import AsyncApp from './AsyncApp';
import GET_INTERFACE_LANGUAGE from '../operations/queries/getInterfaceLanguage';

async function loadMessages(language) {
  return import(/* @vite-ignore */ `@lingui/loader!locales/${language}/messages.po`);
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

  return (
    <I18nProvider language={interfaceLanguage} catalogs={catalogs}>
      <AsyncApp />
    </I18nProvider>
  );
};

export default InterfaceLanguage;
