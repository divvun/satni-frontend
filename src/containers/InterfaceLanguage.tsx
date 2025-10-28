import React from 'react';
import { useReactiveVar } from '@apollo/client';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { useEffect, useState } from 'react';
import { interfaceLanguageVar } from '../apolloCache';
import AsyncApp from './AsyncApp';

async function loadMessages(language: string): Promise<any> {
  // Dynamically import the .po file
  const module = await import(`../locales/${language}/messages.po`);
  return module.messages;
}

const InterfaceLanguage: React.FC = () => {
  const [isI18nReady, setIsI18nReady] = useState(false);
  // Use useReactiveVar instead of useQuery for reactive variables
  const interfaceLanguage = useReactiveVar(interfaceLanguageVar);

  const handleLanguageChange = async (lang: string) => {
    try {
      const messages = await loadMessages(lang);
      i18n.load(lang, messages);
      i18n.activate(lang);
      setIsI18nReady(true);
    } catch (error) {
      console.error(`Failed to load messages for language: ${lang}`, error);
      // Fallback to English if loading fails
      if (lang !== 'en') {
        const fallbackMessages = await loadMessages('en');
        i18n.load('en', fallbackMessages);
        i18n.activate('en');
      }
      setIsI18nReady(true);
    }
  };

  useEffect(() => {
    setIsI18nReady(false);
    handleLanguageChange(interfaceLanguage);
  }, [interfaceLanguage]);

  // Don't render until i18n is ready
  if (!isI18nReady) {
    return null;
  }

  return (
    <I18nProvider i18n={i18n} key={interfaceLanguage}>
      <AsyncApp />
    </I18nProvider>
  );
};

export default InterfaceLanguage;
