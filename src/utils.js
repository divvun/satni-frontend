import dictionaryInfo from './translateble_variables';

// Handle HTTP errors since fetch won't.
export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Place the concept of the wanted language first in a multilingual concept
 * @param {String} language The language should appear first
 * @param {Array} concepts  Concepts where the language might not appear first
 * @returns {Array}         Concept where the language is placed first
 */
export const moveLangFirst = (language, concepts) =>
  concepts.reduce((accumulator, concept) => {
    if (concept.terms[0].expression.language !== language) {
      accumulator.push(concept);
    } else {
      accumulator.unshift(concept);
    }
    return accumulator;
  }, []);

/**
 * An array of terms of the same language
 * @param   {String}  lemma     The lemma that should be in the front
 * @param   {Array}   terms     Terms where term containing the lemma might not be first
 * @return  {Array}             The term containing the lemma is placed first
 */
export const moveLemmaFirst = (lemma, terms) =>
  terms.reduce((accumulator, term) => {
    if (term.expression.lemma === lemma) {
      accumulator.unshift(term);
    } else {
      accumulator.push(term);
    }

    return accumulator;
  }, []);

/**
 * Massage a monolingual concept into the format expected by the view
 * @param   {String}  lemma               The lemma we want
 * @param   {Dict}    concept             A monolingual concept
 * @return  {Dict}                        A monolingual concept where language
 *                                        is added and terms has the wanted lemma
 *                                        placed in the front
 */
export const cleanFrom = (lemma, concept) => ({
  ...concept,
  language: concept.terms[0].expression.language,
  terms: moveLemmaFirst(lemma, concept.terms),
});

/**
 * Given a multilingual concept and lemma find which languages the lemma has
 * @param   {string}  lemma       The lemma we want
 * @param   {Array}   conceptList A multilingual concept
 * @return  {Array}               List of languages
 */
export const languagesOfLemma = (lemma, conceptList) =>
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
 * @param   {String}  lemma               The lemma we want
 * @param   {Array}   multilingualConcept An unordered multilingual concept
 * @return  {Array}                       An ordered multilingual concept
 */
export const orderedMultilingualConcept = (lemma, multilingualConcept) => {
  const languages = languagesOfLemma(lemma, multilingualConcept);
  const [first, ...rest] = moveLangFirst(languages[0], multilingualConcept);

  return [cleanFrom(lemma, first), ...rest];
};

/**
 * Order concept list to sublists ordered by the concept names
 * @param  {Array}  conceptList List of concepts
 * @return {Dict}               Concept lists ordered by names => multilingual
 *                              concepts
 */
export const multilingualconceptListsByNames = (conceptList) =>
  conceptList.reduce((accumulator, concept) => {
    const { name, ...rest } = concept;
    if (!(name in accumulator)) {
      accumulator[name] = [];
    }
    accumulator[name].push(rest);

    return accumulator;
  }, {});

export const backendTranslationGroup2frontendTranslationGroup = (
  translationGroup,
) => ({
  restriction: translationGroup.restriction,
  translations: translationGroup.translationLemmas.edges.map(
    (edge) => edge.node,
  ),
  examples: translationGroup.exampleGroups.map((exampleGroup) => exampleGroup),
});

export const dictBackend2Frontend = (backendDictArticle) => ({
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

export const hasAvailableDict = (pathname) =>
  Object.keys(dictionaryInfo).some((availableDict) =>
    pathname.startsWith(`/${availableDict}`),
  );

export const pathname2Dict = (pathname) => {
  const indices = pathname.split('').reduce((accumulator, pathPart, index) => {
    if (pathPart === '/') {
      accumulator.push(index);
    }
    return accumulator;
  }, []);

  return [pathname.slice(indices[0] + 1, indices[1])];
};

export const availableLanguages = [
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
];

export const locationParser = (pathname) => {
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

export const filterProp = (analyses) => {
  const content = Object.keys(analyses.analyses).reduce((accumulator, key) => {
    accumulator[key.replace('+Prop', '')] = analyses.analyses[key];

    return accumulator;
  }, {});

  return { analyses: content };
};

export const filterParadigm = (satniParadigm) => {
  const result = satniParadigm.generated.reduce((accumulator, key) => {
    accumulator[key.paradigmTemplate] = key.analyses.map(
      (analysis) => analysis.wordform,
    );
    return accumulator;
  }, {});

  return { analyses: result };
};

export const tableRowToParadigmList = (tableRow) =>
  tableRow.flatMap((item) => item.values);
