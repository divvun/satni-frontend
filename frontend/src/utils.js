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

  return nonSami.has(language) ? concepts.filter(concept => !nonSami.has(concept.language)) : concepts;
};

export const moveLangFirst = (language, concepts) => {
  return concepts.reduce(
    (accumulator, currentValue) => {
      if (currentValue.language !== language) {
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
    terms: moveLemmaFirst(lemma, language, concept.terms)
  };
};

export const multiLingualConcept2ConceptPairs = (lemma, language, multilingualconcept) => {
  const concepts = moveLangFirst(language, multilingualconcept.concepts);
  const from = cleanFrom(lemma, language, concepts.shift());
  const termwikiref = multilingualconcept.name;
  const category = multilingualconcept.name.split(':')[0];

  return cleanedConcepts(language, concepts).map(concept => {
    return {
      'termwikiref': termwikiref,
      'category': category,
      'dict': 'termwiki',
      'from': from,
      'to': concept
    };
  });
};

export const multilingualconceptList2ConceptPairs = (lemma, language, multilingualconceptList) => {
  return multilingualconceptList.map(multilingualconcept => multiLingualConcept2ConceptPairs(lemma, language, multilingualconcept)).flat();
};

export const languagesOfLemma = (lemma, multilingualconceptList) => {
  const languages = new Set();
  multilingualconceptList.forEach((multilingualconcept) => {
    multilingualconcept.concepts.forEach((concept) => {
      concept.terms.forEach((term) => {
        if (term.expression.lemma === lemma) {
          languages.add(term.expression.language);
        }
      });
    });
  });

  return languages;
};

export const elemmas2ConceptPairs = (lemma, multilingualconceptList) => {
  const languages = languagesOfLemma(lemma, multilingualconceptList);
  return Array.from(languages).flatMap(language => multilingualconceptList2ConceptPairs(lemma, language, multilingualconceptList));
};

export const backendTranslationGroup2frontendTranslationGroup = (translationGroup) => {
  return {
    restriction: translationGroup.restriction,
    translations: translationGroup.translationLemmas.edges.map(edge => edge.node),
    examples: translationGroup.exampleGroups.map(exampleGroup => exampleGroup)
  };
};

export const dictBackend2Frontend = (lemma, backendDictArticle) => {
  return {
    dict: `${backendDictArticle.srcLang}${backendDictArticle.targetLang}`,
    from: {
      language: backendDictArticle.srcLang,
      lookupLemmas: [backendDictArticle.lookupLemma]
    },
    to: {
      language: backendDictArticle.targetLang,
      translationGroups: backendDictArticle.translationGroups.map(backendTranslationGroup2frontendTranslationGroup)
    }
  };
};
