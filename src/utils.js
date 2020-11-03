import { dictionaryInfo } from 'translateble_variables';

export const stemToKey = (stem) => {
  return `${stem.lemma}_${stem.pos}_${stem.language}`;
};

// Handle HTTP errors since fetch won't.
export const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const moveLangFirst = (language, concepts) => {
  return concepts.reduce(
    (accumulator, concept) => {
      if (concept.terms[0].expression.language !== language) {
        accumulator.push(concept);
      } else {
        accumulator.unshift(concept);
      }
      return accumulator;
    },
    []
  );
};

export const moveLemmaFirst = (lemma, language, terms) => {
  return terms.reduce(
    (accumulator, term) => {
      if (term.expression.language === language &&
        term.expression.lemma === lemma) {
        accumulator.unshift(term);
      } else {
        accumulator.push(term);
      }

      return accumulator;
    },
    []
  );
};

export const cleanFrom = (lemma, language, concept) => {
  return {
    ...concept,
    language,
    terms: moveLemmaFirst(lemma, language, concept.terms)
  };
};

/**
 * Order the lemma to the front of the multilingual concept
 * @param   {String}  lemma               The lemma we want
 * @param   {Array}   multilingualConcept An unordered multilingual concept
 * @return  {Array}                       An ordered multilingual concept
 */
export const orderedMultilingualConcept = (lemma, multilingualConcept) => {
  const languages = languagesOfLemma(lemma, multilingualConcept);
  const [ first, ...rest ] = moveLangFirst(languages[0], multilingualConcept);

  return [cleanFrom(lemma, languages[0], first), ...rest];
};

/**
 * Order concept list to sublists ordered by the concept names
 * @param  {String} lemma       The lemma we want
 * @param  {String} language    The ISO-639-3 language code of the lemma
 * @param  {Array}  conceptList List of concepts
 * @return {Dict}               Concept lists ordered by names => multilingual
 *                              concepts
 */
export const multilingualconceptListsByNames = (conceptList) => {
  return conceptList.reduce(
    (accumulator, concept) => {
      const { name, ...rest } = concept;
      if (!(name in accumulator)) {
        accumulator[name] = [];
      }
      accumulator[name].push(rest);

      return accumulator;
    },
    {}
  );
};

/**
 * Given a multilingual concept and lemma find which languages the lemma has
 * @param   {string}  lemma       The lemma we want
 * @param   {Array}   conceptList A multilingual concept
 * @return  {Array}               List of languages
 */
export const languagesOfLemma = (lemma, conceptList) => {
  return Array.from(new Set(
    conceptList.flatMap(concept => (
      concept.terms.map(term => term)
    )).filter(term => term.expression.lemma === lemma).map(
      term => term.expression.language)));
};

export const backendTranslationGroup2frontendTranslationGroup = (translationGroup) => {
  return {
    restriction: translationGroup.restriction,
    translations: translationGroup.translationLemmas.edges.map(
      edge => edge.node),
    examples: translationGroup.exampleGroups.map(exampleGroup => exampleGroup)
  };
};

export const dictBackend2Frontend = (backendDictArticle) => {
  return {
    dict: backendDictArticle.dictName,
    from: {
      language: backendDictArticle.srcLang,
      lookupLemmas: backendDictArticle.lookupLemmas.edges.map(edge => edge.node)
    },
    to: {
      language: backendDictArticle.targetLang,
      translationGroups: backendDictArticle.translationGroups.map(
        backendTranslationGroup2frontendTranslationGroup)
    }
  };
};

export const hasAvailableDict = pathname => Object.keys(dictionaryInfo).some(
  availableDict => pathname.startsWith(`/${availableDict}`));

export const pathname2Dict = pathname => {
  const indices = pathname.split('').reduce(
    (accumulator, pathPart, index) => {
      if (pathPart === '/') {
        accumulator.push(index);
      }
      return accumulator;
    },
    []
  );

  return [pathname.slice(indices[0] + 1, indices[1])];
};

export const availableLanguages = [
  'sma', 'sme', 'smj', 'smn', 'sms', 'fin', 'nob', 'swe', 'lat', 'eng', 'nno'
];

export const locationParser = pathname => {
  const parts = pathname.split('/');
  console.log(parts);

  if (parts.length === 3) {
    return {
      currentDict: parts[1],
      currentLemma: parts[2]
    };
  }

  if (parts.length === 2) {
    if (Object.keys(dictionaryInfo).includes(parts[1])) {
      return {
        currentDict: parts[1],
        currentLemma: ''
      };
    } else {
      return {
        currentDict: '',
        currentLemma: parts[1]
      };
    }
  }

  return { currentDict: '', currentLemma: '' };
};

export const filterProp = analyses => {
  const content = Object.keys(analyses['analyses']).reduce(
    (accumulator, key) => {
      accumulator[key.replace('+Prop', '')] = analyses['analyses'][key];

      return accumulator;
    },
    {}
  );

  return {'analyses': content};
};
