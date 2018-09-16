import cheerio from 'cheerio';

const toJson = (text) => {
  // eXist sometimes sends misformed json, correct it here
  return JSON.parse(
    text.indexOf('{') === 0 ?
    '[' + text.slice(text.indexOf('{') + 1, text.lastIndexOf('}')) + ']' :
    text);
};

const removeDuplicates = (existTerms) => {
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

const translationStems = (tg) => {
  let stems = [];

  if (tg.t instanceof Object && tg.t instanceof Array) {
    tg.t.forEach((tr) => {
      stems.push({
        'lemma': tr['#text'],
        'lang': tg['xml:lang'],
        'pos': tr.pos
      });
    });
  } else {
    stems.push({
      'lemma': tg.t['#text'],
      'lang': tg['xml:lang'],
      'pos': tg.t.pos
    });
  }

  return stems;
};

const translationExamples = (xg) => {
  let examples = [];
  if (xg instanceof Object && xg instanceof Array) {
    xg.forEach((x) => {
      examples.push({'x': x.x, 'xt': x.xt});
    });
  } else {
    examples.push({'x': xg.x, 'xt': xg.xt});
  }

  return examples;
};

const normaliseDict = (existDict) => {
  let translations = translationStems(existDict.tg);
  translations.unshift({
    'lemma': existDict.term,
    'lang': existDict.lang,
    'pos': existDict.pos
  });

  let examples = existDict.tg.xg ? translationExamples(existDict.tg.xg) : [];

  return {translations, examples};
};

const term2dict = {
  'se': 'sme',
  'sme': 'sme',
  'fi': 'fin',
  'fin': 'fin',
  'nb': 'nob',
  'nor': 'nob',
  'nob': 'nob',
  'nn': 'nno',
  'nno': 'nno',
  'sv': 'swe',
  'swe': 'swe',
  'smn': 'smn',
  'sma': 'sma',
  'smj': 'smj',
  'lat': 'lat',
  'en': 'eng',
  'eng': 'eng'
};

const normaliseTermWiki = (existTerm) => {
  const terms = [];

  const tg = existTerm.tg;
  if (tg instanceof Object && tg instanceof Array) {
    tg.forEach((tg) => {
      let stem = {};
      try {
        stem['lemma'] = tg.t['#text'].trim();
      } catch (TypeError) {
        stem['lemma'] = tg.t.trim();
      }
      stem['lang'] = term2dict[tg['xml:lang']];
      stem['pos'] = tg.t.pos;

      if (stem['lemma']) {
        if (stem['lemma'] === existTerm.term.trim()) {
          terms.unshift(stem);
        } else {
          terms.push(stem);
        }
      }
    });
  } else {
    let stem = {};
    try {
      stem['lemma'] = tg.t['#text'].trim();
    } catch (TypeError) {
      stem['lemma'] = tg.t.trim();
    }
    stem['lang'] = term2dict[tg['xml:lang']];
    stem['pos'] = tg.t.pos;
    terms.push(stem);
  }

  return terms;
};

const sdTranslationStems = (t, lang, pos) => {
  let stems = [];

  if (t instanceof Object && t instanceof Array) {
    t.forEach((tr) => {
      stems.push({
        'lemma': tr.trim(),
        'lang': lang,
        'pos': pos
      });
    });
  } else {
    stems.push({
      'lemma': t.trim(),
      'lang': lang,
      'pos': pos
    });
  }

  return stems;
};

const normaliseSDTerm = (existTerm) => {
  const terms = [];

  existTerm.tg.forEach((tg) => {
    let stems = sdTranslationStems(tg.t, term2dict[tg['xml:lang']], existTerm.pos);

    stems.forEach((stem) => {
      if (stem['lemma'] === existTerm.term.trim()) {
        terms.unshift(stem);
      } else {
        terms.push(stem);
      }
    }
  );
  });
  return terms;
};

const normaliseParadigm = (html) => {
  const dom = cheerio.load(html);
  const fontsElements = dom('font[color=red]');
  const want = {};
  let splits = [];
  fontsElements.each((index, elem) => {
    if (elem.parent.prev.prev.children[0].data.trim()) {
      splits = elem.parent.prev.prev.children[0].data.split(' ');
      if (splits.length === 3) {
        if (!want[splits[2]]) {
          want[splits[2]] = {};
          want[splits[2]][splits[1]] = [];
        } else {
          want[splits[2]][splits[1]] = [];
        }
        want[splits[2]][splits[1]].push(elem.children[0].data);
      } else {
        if (!want[splits[1]]) {
          want[splits[1]] = [];
        }
        want[splits[1]].push(elem.children[0].data);
      }
    } else {
      if (splits.length === 3) {
        want[splits[2]][splits[1]].push(elem.children[0].data);
      } else {
        want[splits[1]].push(elem.children[0].data);
      }
    }
  });

  return want;
};

export {
  toJson, removeDuplicates, translationStems, translationExamples,
  normaliseDict, normaliseTermWiki, normaliseSDTerm, normaliseParadigm
};
