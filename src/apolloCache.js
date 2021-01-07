import { InMemoryCache, makeVar } from '@apollo/client';
import { availableDicts, availableLanguages } from 'utils';

export const interfaceLanguageVar = makeVar(
  localStorage.getItem('interfaceLanguage') ?
    localStorage.getItem('interfaceLanguage') : 'se'
);

export const wantedDictsVar = makeVar(
  localStorage.getItem('wantedDicts') ?
    JSON.parse(localStorage.getItem('wantedDicts')) : availableDicts
);

export const wantedLangsVar = makeVar(
  localStorage.getItem('wantedLangs') ?
    JSON.parse(localStorage.getItem('wantedLangs')) : availableLanguages
);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        interfaceLanguage: {
          read () {
            return interfaceLanguageVar();
          }
        },
        wantedDicts: {
          read () {
            return wantedDictsVar();
          }
        },
        wantedLangs: {
          read () {
            return wantedLangsVar();
          }
        }
      }
    }
  }
});
