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

const cleanedConceptSet = (language, conceptSet) => {
  const nonSami = new Set(['nob', 'eng', 'fin', 'nno', 'swe']);

  return nonSami.has(language) ? conceptSet.filter(concept => !nonSami.has(concept.language)) : conceptSet;
};

export const moveLangFirst = (language, conceptSet) => {
  return conceptSet.reduce(
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

export const moveIdFirst = (id, terms) => {
  return terms.reduce(
    (accumulator, currentValue) => {
      if (currentValue.id !== id) {
        accumulator.push(currentValue);
      } else {
        accumulator.unshift(currentValue);
      }

      return accumulator;
    },
    []
  );
};

const cleanFrom = (id, concept) => {
  return {
    ...concept,
    terms: moveIdFirst(id, concept.terms)
  };
};

export const lemmaConcept2ConceptPairs = (language, id, lemmaconcept) => {
  const conceptSet = moveLangFirst(language, lemmaconcept.conceptSet);
  const from = cleanFrom(id, conceptSet.shift());
  const termwikiref = lemmaconcept.name;
  const category = lemmaconcept.name.split(':')[0];

  return cleanedConceptSet(language, conceptSet).map(concept => {
    return {
      'termwikiref': termwikiref,
      'category': category,
      'dict': 'termwiki',
      'from': from,
      'to': concept
    };
  });
};

export const elemma2ConceptPairs = (elemma) => {
  return elemma.lemmaconcepts.map(lemmaconcept => lemmaConcept2ConceptPairs(elemma.language, elemma.id, lemmaconcept)).flat();
};

export const elemmas2ConceptPairs = (elemmas) => {
  return elemmas.map(elemma => elemma2ConceptPairs(elemma)).flat();
};
