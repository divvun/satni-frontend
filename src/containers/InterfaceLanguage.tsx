import React from 'react';
import { useQuery } from '@apollo/client';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { useEffect, useState } from 'react';
import GET_INTERFACE_LANGUAGE from '../operations/queries/getInterfaceLanguage';
import AsyncApp from './AsyncApp';

interface InterfaceLanguageQueryData {
  interfaceLanguage: string;
}

async function loadMessages(language: string): Promise<any> {
  // Dynamically import the message module (transformed by Vite plugin)
  const module = await import(`../locales/${language}/messages.js`);
  return module.default;
}

const InterfaceLanguage: React.FC = () => {
  const [isI18nReady, setIsI18nReady] = useState(false);
  const interfaceLanguageQueryResult = useQuery<InterfaceLanguageQueryData>(
    GET_INTERFACE_LANGUAGE,
  );
  const { interfaceLanguage } = interfaceLanguageQueryResult.data || {
    interfaceLanguage: 'en',
  };

  const handleLanguageChange = async (lang: string) => {
    const messages = await loadMessages(lang);
    i18n.load(lang, messages);
    i18n.activate(lang);
    setIsI18nReady(true);
  };

  useEffect(() => {
    handleLanguageChange(interfaceLanguage);
  }, [interfaceLanguage]);

  // Don't render until i18n is ready
  if (!isI18nReady) {
    return null;
  }

  return (
    <I18nProvider i18n={i18n}>
      <AsyncApp />
    </I18nProvider>
  );
};

export default InterfaceLanguage;
