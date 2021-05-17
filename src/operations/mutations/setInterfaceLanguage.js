import { interfaceLanguageVar } from '../../apolloCache';

const setInterfaceLanguage = (language) => {
  localStorage.setItem('interfaceLanguage', language);
  interfaceLanguageVar(language);
};

export default setInterfaceLanguage;
