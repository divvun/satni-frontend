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

const mapByLanguagePair = (accumulator, currentValue) => {
  const key = `${currentValue.from.language}${currentValue.to.language}`;
  if (accumulator[key]) {
    accumulator[key] = [...accumulator[key], currentValue];
  } else {
    accumulator[key] = [currentValue];
  }
  return accumulator;
};

export const mapArticlesByLanguagePair = (articles) => {
  return articles.reduce(mapByLanguagePair, {});
};

const cleanedConcepts = (language, concepts) => {
  const nonSami = new Set(['nob', 'eng', 'fin', 'nno', 'swe']);

  return nonSami.has(language) ? concepts.filter(concept => !nonSami.has(concept.terms[0].expression.language)) : concepts;
};

export const moveLangFirst = (language, concepts) => {
  return concepts.reduce(
    (accumulator, currentValue) => {
      if (currentValue.terms[0].expression.language !== language) {
        accumulator.push(currentValue);
      } else {
        accumulator.unshift(currentValue);
      }
      return accumulator;
    },
    []
  );
};

export const moveLemmaFirst = (lemma, language, terms) => {
  return terms.reduce(
    (accumulator, currentValue) => {
      if (currentValue.expression.language === language && currentValue.expression.lemma === lemma) {
        accumulator.unshift(currentValue);
      } else {
        accumulator.push(currentValue);
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

export const multiLingualConcept2ConceptPairs = (lemma, language, multilingualconcept) => {
  const concepts = moveLangFirst(language, multilingualconcept);
  const {name, collections, ...rest} = concepts.shift();
  const from = cleanFrom(lemma, language, rest);
  const category = name.split(':')[0];

  return cleanedConcepts(language, concepts).map(concept => {
    const {name, collections, ...rest} = concept;
    const language = rest.terms[0].expression.language;

    return {
      termwikiref: name,
      category,
      dict: 'termwiki',
      collections,
      from: from,
      to: {
        ...rest,
        language
      }
    };
  });
};

export const multilingualconceptList2ConceptPairs = (lemma, language, conceptList) => {
  const names = conceptListNames(conceptList);

  return names.map(name => multiLingualConcept2ConceptPairs(lemma, language, conceptList.filter(concept => concept.name === name))).flat();
};

export const languagesOfLemma = (lemma, conceptList) => {
  return Array.from(new Set(
    conceptList.flatMap(concept => (
      concept.terms.map(term => term)
    )).filter(term => term.expression.lemma === lemma).map(
      term => term.expression.language)));
};

export const conceptListNames = (conceptList) => {
  return Array.from(new Set(conceptList.filter(concept => concept.name).map(
    concept => concept.name)));
};

export const elemmas2ConceptPairs = (lemma, conceptList) => {
  const langs = languagesOfLemma(lemma, conceptList);
  return langs.map(language => multilingualconceptList2ConceptPairs(lemma, language, [...conceptList])).flat();
};

export const backendTranslationGroup2frontendTranslationGroup = (translationGroup) => {
  return {
    restriction: translationGroup.restriction,
    translations: translationGroup.translationLemmas.edges.map(edge => edge.node),
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
      translationGroups: backendDictArticle.translationGroups.map(backendTranslationGroup2frontendTranslationGroup)
    }
  };
};
