import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/react types compatibility
import { I18nProvider } from '@lingui/react';
import { useEffect, useState } from 'react';
import GET_INTERFACE_LANGUAGE from '../operations/queries/getInterfaceLanguage';
import AsyncApp from './AsyncApp';

interface CatalogData {
  [key: string]: any;
}

interface InterfaceLanguageQueryData {
  interfaceLanguage: string;
}

async function loadMessages(language: string): Promise<any> {
  return import(
    /* @vite-ignore */ `@lingui/loader!locales/${language}/messages.po`
  );
}

const InterfaceLanguage: React.FC = () => {
  const interfaceLanguageQueryResult = useQuery<InterfaceLanguageQueryData>(
    GET_INTERFACE_LANGUAGE,
  );
  const { interfaceLanguage } = interfaceLanguageQueryResult.data || {
    interfaceLanguage: 'en',
  };
  const [catalogs, setCatalogs] = useState<CatalogData>({});

  const handleLanguageChange = async (lang: string) => {
    const newCatalog = await loadMessages(lang);
    setCatalogs((cats) => ({ ...cats, [lang]: newCatalog }));
  };

  useEffect(() => {
    const fetchCatalog = () => handleLanguageChange(interfaceLanguage);
    fetchCatalog();
  }, [interfaceLanguage, handleLanguageChange]);

  return (
    // @ts-ignore - @lingui/react types compatibility
    <I18nProvider language={interfaceLanguage} catalogs={catalogs}>
      <AsyncApp />
    </I18nProvider>
  );
};

export default InterfaceLanguage;
