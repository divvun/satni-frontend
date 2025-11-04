import { InMemoryCache, makeVar, ReactiveVar } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";
import dictionaryInfo from "./translateble_variables";
import { availableLanguages } from "./utils";

export const availableDictsVar: ReactiveVar<string[]> = makeVar(
  Object.keys(dictionaryInfo)
);

export const interfaceLanguageVar: ReactiveVar<string> = makeVar(
  localStorage.getItem("interfaceLanguage") || "se"
);

const getWanted = (): string[] => {
  const unwantedDictsItem = localStorage.getItem("unwantedDicts");
  const unwanted = unwantedDictsItem ? JSON.parse(unwantedDictsItem) : [];

  return unwanted
    ? Object.keys(dictionaryInfo).filter(
        (availableDict) => !unwanted.includes(availableDict)
      )
    : Object.keys(dictionaryInfo);
};

export const wantedDictsVar: ReactiveVar<string[]> = makeVar(getWanted());

export const srcLangsVar: ReactiveVar<string[]> = makeVar(
  localStorage.getItem("srcLangs")
    ? JSON.parse(localStorage.getItem("srcLangs")!)
    : availableLanguages
);

export const targetLangsVar: ReactiveVar<string[]> = makeVar(
  localStorage.getItem("targetLangs")
    ? JSON.parse(localStorage.getItem("targetLangs")!)
    : availableLanguages
);

export const searchModeVar: ReactiveVar<string> = makeVar("start");

export const searchListClickedItemVar: ReactiveVar<number> = makeVar(-1);

export const darkModeVar: ReactiveVar<boolean> = makeVar(
  localStorage.getItem("darkMode") === "true"
);

// Korp cache: Map of "language:lemma" -> boolean (lemma exists in corpus)
export const korpCacheVar: ReactiveVar<Record<string, boolean>> = makeVar({});

// TTS cache: Map of "language:voice:text" -> audioUrl (blob URL)
export const ttsCacheVar: ReactiveVar<Record<string, string>> = makeVar({});

// Paradigm cache: Map of "language:lemma:templates" -> ParadigmResult[]
export const paradigmCacheVar: ReactiveVar<Record<string, any[]>> = makeVar({});

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
        darkMode: {
          read() {
            return darkModeVar();
          },
        },
        stemList: relayStylePagination([
          "search",
          "mode",
          "wanted",
          "wantedDicts",
        ]),
      },
    },
  },
});
