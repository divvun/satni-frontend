import dictionaryInfo from './translateble_variables';

// Define types for the data structures
export interface Term {
  expression: {
    lemma: string;
    language: string;
  };
}

export interface Concept {
  name?: string;
  terms: Term[];
}

export interface TranslationLemma {
  node: any; // TODO: Define proper type
}

export interface ExampleGroup {
  // TODO: Define proper structure
  [key: string]: any;
}

export interface TranslationGroup {
  restriction: string;
  translationLemmas: {
    edges: TranslationLemma[];
  };
  exampleGroups: ExampleGroup[];
}

export interface BackendDictArticle {
  dictName: string;
  srcLang: string;
  targetLang: string;
  lookupLemmas: {
    edges: { node: any }[];
  };
  translationGroups: TranslationGroup[];
}

export interface FrontendTranslationGroup {
  restriction: string;
  translations: any[];
  examples: ExampleGroup[];
}

export interface DictArticle {
  dict: string;
  from: {
    language: string;
    lookupLemmas: any[];
  };
  to: {
    language: string;
    translationGroups: FrontendTranslationGroup[];
  };
}

export interface LocationParsed {
  currentDict: string;
  currentLemma: string;
}

export interface Analyses {
  analyses: Record<string, any>;
}

export interface SatniParadigm {
  generated: Array<{
    paradigmTemplate: string;
    analyses: Array<{
      wordform: string;
    }>;
  }>;
}

// Handle HTTP errors since fetch won't.
export const handleErrors = (response: Response): Response => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Place the concept of the wanted language first in a multilingual concept
 * @param language The language should appear first
 * @param concepts Concepts where the language might not appear first
 * @returns Concept where the language is placed first
 */
export const moveLangFirst = (language: string, concepts: Concept[]): Concept[] =>
  concepts.reduce((accumulator: Concept[], concept: Concept) => {
    if (concept.terms[0].expression.language !== language) {
      accumulator.push(concept);
    } else {
      accumulator.unshift(concept);
    }
    return accumulator;
  }, []);

/**
 * An array of terms of the same language
 * @param lemma The lemma that should be in the front
 * @param terms Terms where term containing the lemma might not be first
 * @return The term containing the lemma is placed first
 */
export const moveLemmaFirst = (lemma: string, terms: Term[]): Term[] =>
  terms.reduce((accumulator: Term[], term: Term) => {
    if (term.expression.lemma === lemma) {
      accumulator.unshift(term);
    } else {
      accumulator.push(term);
    }

    return accumulator;
  }, []);

/**
 * Massage a monolingual concept into the format expected by the view
 * @param lemma The lemma we want
 * @param concept A monolingual concept
 * @return A monolingual concept where language is added and terms has the wanted lemma placed in the front
 */
export const cleanFrom = (lemma: string, concept: Concept): Concept & { language: string } => ({
  ...concept,
  language: concept.terms[0].expression.language,
  terms: moveLemmaFirst(lemma, concept.terms),
});

/**
 * Given a multilingual concept and lemma find which languages the lemma has
 * @param lemma The lemma we want
 * @param conceptList A multilingual concept
 * @return List of languages
 */
export const languagesOfLemma = (lemma: string, conceptList: Concept[]): string[] =>
  Array.from(
    new Set(
      conceptList
        .flatMap((concept) => concept.terms.map((term) => term))
        .filter((term) => term.expression.lemma === lemma)
        .map((term) => term.expression.language),
    ),
  );

/**
 * Order the lemma to the front of the multilingual concept
 * @param lemma The lemma we want
 * @param multilingualConcept An unordered multilingual concept
 * @return An ordered multilingual concept
 */
export const orderedMultilingualConcept = (lemma: string, multilingualConcept: Concept[]): Concept[] => {
  const languages = languagesOfLemma(lemma, multilingualConcept);
  const [first, ...rest] = moveLangFirst(languages[0], multilingualConcept);

  return [cleanFrom(lemma, first), ...rest];
};

/**
 * Order concept list to sublists ordered by the concept names
 * @param conceptList List of concepts
 * @return Concept lists ordered by names => multilingual concepts
 */
export const multilingualconceptListsByNames = (conceptList: Concept[]): Record<string, Concept[]> =>
  conceptList.reduce((accumulator: Record<string, Concept[]>, concept: Concept) => {
    const { name, ...rest } = concept;
    if (name && !(name in accumulator)) {
      accumulator[name] = [];
    }
    if (name) {
      accumulator[name].push(rest);
    }

    return accumulator;
  }, {});

export const backendTranslationGroup2frontendTranslationGroup = (
  translationGroup: TranslationGroup,
): FrontendTranslationGroup => ({
  restriction: translationGroup.restriction,
  translations: translationGroup.translationLemmas.edges.map(
    (edge) => edge.node,
  ),
  examples: translationGroup.exampleGroups.map((exampleGroup) => exampleGroup),
});

export const dictBackend2Frontend = (backendDictArticle: BackendDictArticle): DictArticle => ({
  dict: backendDictArticle.dictName,
  from: {
    language: backendDictArticle.srcLang,
    lookupLemmas: backendDictArticle.lookupLemmas.edges.map(
      (edge) => edge.node,
    ),
  },
  to: {
    language: backendDictArticle.targetLang,
    translationGroups: backendDictArticle.translationGroups.map(
      backendTranslationGroup2frontendTranslationGroup,
    ),
  },
});

export const hasAvailableDict = (pathname: string): boolean =>
  Object.keys(dictionaryInfo).some((availableDict) =>
    pathname.startsWith(`/${availableDict}`),
  );

export const pathname2Dict = (pathname: string): string[] => {
  const indices = pathname.split('').reduce((accumulator: number[], pathPart: string, index: number) => {
    if (pathPart === '/') {
      accumulator.push(index);
    }
    return accumulator;
  }, []);

  return [pathname.slice(indices[0] + 1, indices[1])];
};

export const availableLanguages: readonly string[] = [
  'sma',
  'sme',
  'smj',
  'smn',
  'sms',
  'fin',
  'nob',
  'swe',
  'lat',
  'eng',
  'nno',
  'rus',
] as const;

export const locationParser = (pathname: string): LocationParsed => {
  const parts = pathname.split('/');

  if (parts.length === 3) {
    return {
      currentDict: parts[1],
      currentLemma: parts[2],
    };
  }

  if (parts.length === 2) {
    if (Object.keys(dictionaryInfo).includes(parts[1])) {
      return {
        currentDict: parts[1],
        currentLemma: '',
      };
    }

    return {
      currentDict: '',
      currentLemma: parts[1],
    };
  }

  return { currentDict: '', currentLemma: '' };
};

export const filterProp = (analyses: Analyses): Analyses => {
  const content = Object.keys(analyses.analyses).reduce((accumulator: Record<string, any>, key: string) => {
    accumulator[key.replace('+Prop', '')] = analyses.analyses[key];

    return accumulator;
  }, {});

  return { analyses: content };
};

export const filterParadigm = (satniParadigm: SatniParadigm): Analyses => {
  const result = satniParadigm.generated.reduce((accumulator: Record<string, string[]>, key) => {
    accumulator[key.paradigmTemplate] = key.analyses.map(
      (analysis) => analysis.wordform,
    );
    return accumulator;
  }, {});

  return { analyses: result };
};

export const tableRowToParadigmList = (tableRow: any[][]): any[] =>
  tableRow.flatMap((item) => item.values);