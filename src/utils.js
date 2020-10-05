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

const cleanedConcepts = (language, concepts) => {
  const nonSami = new Set(['nob', 'eng', 'fin', 'nno', 'swe']);

  return nonSami.has(language) ? concepts.filter(
    concept => !nonSami.has(concept.terms[0].expression.language)) : concepts;
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

/**
 * Order concept list to sublists ordered by the concept names
 * @param  {String} lemma       The lemma we want
 * @param  {String} language    The ISO-639-3 language code of the lemma
 * @param  {Array}  conceptList List of concepts
 * @return {Dict}               Concepts ordered by names
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

export const availableDicts = [
  'termwiki', 'gtsmenob', 'gtnobsme', 'gtnobsma', 'gtsmanob', 'gtsmefin',
  'gtfinsme', 'gtfinsmn', 'gtsmnfin', 'gtsmesmn', 'gtsmnsme',
  'sammallahtismefin'
];

export const hasAvailableDict = pathname => availableDicts.some(
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
    if (availableDicts.includes(parts[1])) {
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
