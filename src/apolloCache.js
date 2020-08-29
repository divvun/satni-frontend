import { InMemoryCache, makeVar } from '@apollo/client';

export const interfaceLanguageVar = makeVar(
  localStorage.getItem('interfaceLanguage') ?
    localStorage.getItem('interfaceLanguage') : 'se'
);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        interfaceLanguage: {
          read () {
            return interfaceLanguageVar();
          }
        }
      }
    }
  }
});
