import { InMemoryCache, makeVar } from '@apollo/client';
import { relayStylePagination } from '@apollo/client/utilities';
import dictionaryInfo from './translateble_variables';
import { availableLanguages } from './utils';

export const availableDictsVar = makeVar(Object.keys(dictionaryInfo));

export const interfaceLanguageVar = makeVar(
  localStorage.getItem('interfaceLanguage')
    ? localStorage.getItem('interfaceLanguage')
    : 'se',
);

const getWanted = () => {
  const unwanted = localStorage.getItem('unwantedDicts')
    ? JSON.parse(localStorage.getItem('unwantedDicts'))
    : [];

  return unwanted
    ? Object.keys(dictionaryInfo).filter(
        (availableDict) => !unwanted.includes(availableDict),
      )
    : Object.keys(dictionaryInfo);
};

export const wantedDictsVar = makeVar(getWanted());

export const srcLangsVar = makeVar(
  localStorage.getItem('srcLangs')
    ? JSON.parse(localStorage.getItem('srcLangs'))
    : availableLanguages,
);

export const targetLangsVar = makeVar(
  localStorage.getItem('targetLangs')
    ? JSON.parse(localStorage.getItem('targetLangs'))
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
        srcLangs: {
          read() {
            return srcLangsVar();
          },
        },
        targetLangs: {
          read() {
            return targetLangsVar();
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
