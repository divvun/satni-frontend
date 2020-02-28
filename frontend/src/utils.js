export const toJson = (text) => {
  // eXist sometimes sends misformed json, correct it here
  if (text === 'null') {
    throw Error('text is null!');
  }
  return JSON.parse(
    text.indexOf('{') === 0 ?
    '[' + text.slice(text.indexOf('{') + 1, text.lastIndexOf('}')) + ']' :
    text);
};

export const removeDuplicates = (existTerms) => {
  const foundTermWikiRef = [];

  return existTerms.filter((term) => {
    if (term.dict === 'termwiki') {
      if (!foundTermWikiRef.includes(term.termwikiref)) {
        foundTermWikiRef.push(term.termwikiref);
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  });
};

export const ensureTranslationGroupIsArray = (existTerms) => {
  return existTerms
  .filter(existTerm => existTerm.tg)
  .map((existTerm) => {
    const tg = existTerm.tg;
    if (tg instanceof Object && !(tg instanceof Array)) {
      existTerm.tg = [tg];
    }
    return existTerm;
  });
};

export const normaliseArticles = (existTerms) => {
  try {
    return removeDuplicates(
    ensureTranslationGroupIsArray(existTerms)).map((existTerm) => {
      if (existTerm.dict !== 'termwiki') {
        let dicts = normaliseDict(existTerm);
        for (var i = 0, len = dicts.length; i < len; i++) {
          return dicts[i];
        }
      }

      return normaliseTermWiki(existTerm);
    }
  );
  } catch (error) {
    return [];
  }
};

export const translationStems = (tg) => {
  let stems = [];

  if (tg.t instanceof Object && tg.t instanceof Array) {
    tg.t.forEach((tr) => {
      const result = {
        'lemma': tr['#text'],
        language: tg['xml:lang'],
        'pos': tr.pos
      };
      if (tg['re']) {
        result['re'] = '(' + tg['re'] + ')';
      }
      stems.push(result);
    });
  } else {
    const result = {
      'lemma': tg.t['#text'],
      language: tg['xml:lang'],
      'pos': tg.t.pos
    };
    if (tg['re']) {
      if (tg['re'] instanceof Object) {
        result['re'] = '(' + tg['re']['xml:lang'] + ': ' + tg['re']['#text'] + ')';
      } else {
        result['re'] = '(' + tg['re'] + ')';
      }
    }
    stems.push(result);
  }

  return stems;
};

const exampleElementToText = (element) => {
  if (element instanceof Object) {
    return element['#text'];
  }

  return element;
};

export const translationExamples = (xg) => {
  let examples = [];
  if (xg instanceof Object && xg instanceof Array) {
    xg.forEach((x) => {
      examples.push({'x': exampleElementToText(x.x), 'xt': exampleElementToText(x.xt)});
    });
  } else {
    examples.push({'x': exampleElementToText(xg.x), 'xt': exampleElementToText(xg.xt)});
  }

  return examples;
};

export const normaliseDict = (existDict) => {
  const results = [];
  const translations = [];
  const tg = existDict.tg;

  tg.forEach((tr) => {
    let translations = translationStems(tr);
    translations.unshift({
      'lemma': existDict.term,
      language: existDict.lang,
      'pos': existDict.pos
    });

    let examples = tr.xg ? translationExamples(tr.xg) : [];

    results.push(
      {
        translations,
        examples,
        termwikiref: existDict.termwikiref,
        dict: existDict.dict
      }
      );
  });

  let examples = existDict.tg.xg ? translationExamples(existDict.tg.xg) : [];

  results.push(
    {
      translations,
      examples,
      termwikiref: existDict.termwikiref,
      dict: existDict.dict
    }
    );

  return results;
};

const term2dict = {
  'en': 'eng',
  'eng': 'eng',
  'fi': 'fin',
  'fin': 'fin',
  'lat': 'lat',
  'nb': 'nob',
  'nn': 'nno',
  'nno': 'nno',
  'nob': 'nob',
  'nor': 'nob',
  'se': 'sme',
  'sma': 'sma',
  'sme': 'sme',
  'smj': 'smj',
  'smn': 'smn',
  'sms': 'sms',
  'sv': 'swe',
  'swe': 'swe'
};

const normaliseTranslationGroup = (existTerm) => {
  const terms = [];
  const tg = existTerm.tg;

  tg.forEach((tg) => {
    let stem = {};
    try {
      stem.lemma = tg.t['#text'].trim();
    } catch (TypeError) {
      stem.lemma = tg.t.trim();
    }
    stem.language = term2dict[tg['xml:lang']];
    stem.pos = tg.t.pos;

    if (stem.lemma) {
      if (stem.lemma === existTerm.term.trim()) {
        terms.unshift(stem);
      } else {
        terms.push(stem);
      }
    }
  });

  return terms;
};

export const normaliseTermWiki = (existTerm) => {
  return {
    stems: normaliseTranslationGroup(existTerm),
    termwikiref: existTerm.termwikiref,
    dict: existTerm.dict
  };
};

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

// new termwiki formatting from here
export const termwikiPosts = (lemma, termpost) => {
  const stemsWithLemma = termpost.stems.filter(stem => stem.lemma === lemma);
  const sami = new Set(['sma', 'sme', 'smj', 'sms', 'smn']);

  return stemsWithLemma.map(stemWithLemma => termpost.stems
    .filter(stem => stem !== stemWithLemma)
    .map(stem => {
      return {
        stems: [
          stemWithLemma,
          stem
        ],
        dict: termpost.dict,
        category: termpost.termwikiref.split(':')[0],
        termwikiref: termpost.termwikiref
      };
    })
  )
  .flat()
  .filter(stemPair => (sami.has(stemPair.stems[0].language) || sami.has(stemPair.stems[1].language)));
};

export const dictPosts = (dictpost) => {
  const [ stemWithLemma, ...otherStems ] = dictpost.translations;

  return otherStems.map(otherStem => (
    {
      stems: [
        stemWithLemma,
        otherStem
      ],
      dict: dictpost.dict,
      termwikiref: dictpost.termwikiref,
      examples: dictpost.examples
    }
  ));
};

const mapByLanguagePair = (accumulator, currentValue) => {
  const key = currentValue.stems.map(stem => stem.language).join('');
  if (accumulator[key]) {
    accumulator[key] = [...accumulator[key], currentValue];
  } else {
    accumulator[key] = [currentValue];
  }
  return accumulator;
};

export const mapArticlesByLanguagePair = (articles) => {
  const articlesByLanguagePair = articles.map(article => {
    if (article.dict === 'termwiki') {
      return termwikiPosts(article.stems[0].lemma, article);
    }
    return dictPosts(article);
  });

  return articlesByLanguagePair.flat().reduce(mapByLanguagePair, {});
};
