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
  console.log('currentValue', currentValue);
  console.log('from', currentValue.from);
  console.log('to', currentValue.to);
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

export const moveIdFirst = (id, termSet) => {
  return termSet.reduce(
    (accumulator, currentValue) => {
      if (currentValue.expression.id !== id) {
        accumulator.push(currentValue);
      } else {
        accumulator.unshift(currentValue);
      }

      return accumulator;
    },
    []
  );
};

export const cleanFrom = (id, concept) => {
  return {
    ...concept,
    termSet: moveIdFirst(id, concept.termSet)
  };
};

export const multiLingualConcept2ConceptPairs = (language, id, multilingualconcept) => {
  const conceptSet = moveLangFirst(language, multilingualconcept.conceptSet);
  const from = cleanFrom(id, conceptSet.shift());
  const termwikiref = multilingualconcept.name;
  const category = multilingualconcept.name.split(':')[0];

  return cleanedConceptSet(language, conceptSet).map(concept => {
    return {
      'termwikiref': termwikiref,
      'category': category,
      'dict': 'termwiki',
      'from': {...from, termSet: from.termSet.map(term => ({...term, ...term.expression}))},
      'to': {...concept, termSet: concept.termSet.map(term => ({...term, ...term.expression}))}
    };
  });
};

export const elemma2ConceptPairs = (elemma) => {
  return elemma.multilingualconcepts.map(multilingualconcept => multiLingualConcept2ConceptPairs(elemma.language, elemma.id, multilingualconcept)).flat();
};

export const elemmas2ConceptPairs = (elemmas) => {
  return elemmas.map(elemma => elemma2ConceptPairs(elemma)).flat();
};
