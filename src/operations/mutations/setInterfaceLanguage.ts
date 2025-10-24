import { interfaceLanguageVar } from '../../apolloCache';

const setInterfaceLanguage = (language: string): void => {
  localStorage.setItem('interfaceLanguage', language);
  interfaceLanguageVar(language);
};

export default setInterfaceLanguage;
