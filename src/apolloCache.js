import { InMemoryCache, makeVar } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import { availableLanguages } from './utils';
import dictionaryInfo from './translateble_variables';

export const interfaceLanguageVar = makeVar(
  localStorage.getItem('interfaceLanguage')
    ? localStorage.getItem('interfaceLanguage')
    : 'se',
);

export const wantedDictsVar = makeVar(
  localStorage.getItem('wantedDicts')
    ? JSON.parse(localStorage.getItem('wantedDicts'))
    : Object.keys(dictionaryInfo),
);

export const wantedLangsVar = makeVar(
  localStorage.getItem('wantedLangs')
    ? JSON.parse(localStorage.getItem('wantedLangs'))
    : availableLanguages,
);

export const searchModeVar = makeVar('start');

export const searchListClickedItemVar = makeVar(-1);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        interfaceLanguage: {
          read() {
            return interfaceLanguageVar();
          },
        },
        wantedDicts: {
          read() {
            return wantedDictsVar();
          },
        },
        wantedLangs: {
          read() {
            return wantedLangsVar();
          },
        },
        searchMode: {
          read() {
            return searchModeVar();
          },
        },
        searchListClickedItem: {
          read() {
            return searchListClickedItemVar();
          },
        },
        stemList: relayStylePagination([
          'search',
          'mode',
          'wanted',
          'wantedDicts',
        ]),
      },
    },
  },
});
