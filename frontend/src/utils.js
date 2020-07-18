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
  // Denne burde vel fungere …
  const nonSami = new Set(['nob', 'eng', 'fin', 'nno', 'swe']);

  return nonSami.has(language) ? concepts.filter(concept => !nonSami.has(concept.language)) : concepts;
};

export const moveLangFirst = (language, concepts) => {
  // Denne burde fungere, men må ordnes per navn, kanskje?
  console.log(language, concepts.length);
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
  // Denne fungerer på det nye formatet
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
  // Denne fungerer på det nye formatet
  return {
    ...concept,
    terms: moveLemmaFirst(lemma, language, concept.terms)
  };
};

export const multiLingualConcept2ConceptPairs = (lemma, language, multilingualconcept) => {
  const concepts = moveLangFirst(language, multilingualconcept);
  const from = cleanFrom(lemma, language, concepts.shift());
  console.log(lemma, language, from.terms);
  const termwikiref = from.name;
  const category = from.name.split(':')[0];
  const collections = from.collections;
  delete from.collections;
  delete from.name;

  return cleanedConcepts(language, concepts).map(concept => {
    delete concept.collections;
    delete concept.name;
    from['language'] = language;
    concept['language'] = concept.terms[0].expression.language;

    return {
      'termwikiref': termwikiref,
      'category': category,
      'dict': 'termwiki',
      'collections': collections,
      'from': from,
      'to': concept
    };
  });
};

export const multilingualconceptList2ConceptPairs = (lemma, language, conceptList) => {
  const names = conceptListNames(conceptList);
  console.log(names, language);
  return names.map(name => multiLingualConcept2ConceptPairs(lemma, language, conceptList.filter(concept => concept.name === name))).flat();
};

export const languagesOfLemma = (lemma, conceptList) => {
  const languages = new Set();
  conceptList.forEach((concept) => {
    concept.terms.forEach((term) => {
      if (term.expression.lemma === lemma) {
        console.log(lemma, term.expression.language);
        languages.add(term.expression.language);
      }
    });
  });
  return Array.from(languages);
};

export const conceptListNames = (conceptList) => {
  // Denne erstattes med wantedLangs
  return Array.from(new Set(conceptList.filter(concept => concept.name).map(concept => concept.name)));
};

export const elemmas2ConceptPairs = (lemma, conceptList) => {
  // Dette er det samme som wantedLangs
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
