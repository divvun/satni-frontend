import xpath from 'xpath';
import {DOMParser} from 'xmldom';
import { List, Set } from 'immutable';

const num = Set.of('Sg', 'Pl');

const verbSet = Set.of(
  'V Ind Prs ConNeg',
  'V Ind Prt ConNeg',
  'V PrfPrc'
);

const verbNumber = List.of(
  'Sg1', 'Sg2', 'Sg3',
  'Du1', 'Du2', 'Du3',
  'Pl1', 'Pl2', 'Pl3'
);

const verbDict = {
  'sma': {
    'V Ind Prs ConNeg': [
      'in', 'it', 'ii',
      'ean', 'eahppi', 'eaba',
      'eat', 'ehpet', 'eai'
    ],
    'V Ind Prt ConNeg': [
      'in', 'it', 'ii',
      'ean', 'eahppi', 'eaba',
      'eat', 'ehpet', 'eai'
    ],
    'V PrfPrc': [
      'lean', 'leat', 'lea',
      'ledne', 'leahppi', 'leaba',
      'leat', 'lehpet', 'leat'
    ]
  },
  'sme': {
    'V Ind Prs ConNeg': [
      'in', 'it', 'ii',
      'ean', 'eahppi', 'eaba',
      'eat', 'ehpet', 'eai'
    ],
    'V Ind Prt ConNeg': [
      'in', 'it', 'ii',
      'ean', 'eahppi', 'eaba',
      'eat', 'ehpet', 'eai'
    ],
    'V PrfPrc': [
      'lean', 'leat', 'lea',
      'ledne', 'leahppi', 'leaba',
      'leat', 'lehpet', 'leat'
    ]
  },
  'smj': {
    'V Ind Prs ConNeg': [
      'in', 'it', 'ii',
      'ean', 'eahppi', 'eaba',
      'eat', 'ehpet', 'eai'
    ],
    'V Ind Prt ConNeg': [
      'in', 'it', 'ii',
      'ean', 'eahppi', 'eaba',
      'eat', 'ehpet', 'eai'
    ],
    'V PrfPrc': [
      'lean', 'leat', 'lea',
      'ledne', 'leahppi', 'leaba',
      'leat', 'lehpet', 'leat'
    ]
  },
  'smn': {
    'V Ind Prs ConNeg': [
      'in', 'it', 'ii',
      'ean', 'eahppi', 'eaba',
      'eat', 'ehpet', 'eai'
    ],
    'V Ind Prt ConNeg': [
      'in', 'it', 'ii',
      'ean', 'eahppi', 'eaba',
      'eat', 'ehpet', 'eai'
    ],
    'V PrfPrc': [
      'lean', 'leat', 'lea',
      'ledne', 'leahppi', 'leaba',
      'leat', 'lehpet', 'leat'
    ]
  }
};

export const toJson = (text) => {
  // eXist sometimes sends misformed json, correct it here
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
  return removeDuplicates(
    ensureTranslationGroupIsArray(existTerms)).map((existTerm) => {
      if (existTerm.dict === 'termwiki' || existTerm.dict === 'mekanikk-1999') {
        return normaliseTermWiki(existTerm);
      } else if (existTerm.dict === 'JustermTana') {
        return normaliseJusterm(existTerm);
      } else if (existTerm.dict === 'SD-terms') {
        return normaliseSDTerm(existTerm);
      } else {
        let dicts = normaliseDict(existTerm);
        for (var i = 0, len = dicts.length; i < len; i++) {
          return dicts[i];
        }
      }
    });
};

export const translationStems = (tg) => {
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

export const translationExamples = (xg) => {
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

export const normaliseDict = (existDict) => {
  const results = [];
  const translations = [];
  const tg = existDict.tg;

  tg.forEach((tr) => {
    let translations = translationStems(tr);
    translations.unshift({
      'lemma': existDict.term,
      'lang': existDict.lang,
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
    stem.lang = term2dict[tg['xml:lang']];
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

export const normaliseJusterm = (jusTerm) => {
  const stems = normaliseTranslationGroup(jusTerm);
  stems.unshift({
    lemma: jusTerm.term.trim(),
    lang: jusTerm.lang,
    pos: jusTerm.pos
  });

  return {
    stems,
    dict: jusTerm.dict
  };
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

export const normaliseSDTerm = (existTerm) => {
  const terms = [];

  const etg = existTerm.tg;
  etg.forEach((tg) => {
    let stems = sdTranslationStems(tg.t, term2dict[tg['xml:lang']], existTerm.pos);

    stems.forEach((stem) => {
      if (stem.lemma === existTerm.term.trim()) {
        terms.unshift(stem);
      } else {
        terms.push(stem);
      }
    });
  });

  return {
    stems: terms,
    dict: existTerm.dict
  };
};

export const normaliseNounParadigm = (html) => {
  const doc = new DOMParser().parseFromString(html);
  const tables = xpath.select('.//table', doc);
  const tableRows = xpath.select('.//tr', tables[1]);
  const want = {};
  let splits = [];

  tableRows.forEach((tr) => {
    const idText = xpath.select('.//td', tr)[1].firstChild.data;
    const wordForms = xpath.select('.//font[@color="red"]', tr)
        .map((font) => font.firstChild.data);

    splits = idText.split(' ');
    if (splits.length < 4) {
      if (splits.length === 3) {
        if (!want[splits[2]]) {
          want[splits[2]] = {};
        }
        want[splits[2]][splits[1]] = wordForms;
      } else {
        want[splits[1] + '_both'] = wordForms;
      }
    }
  });

  return want;
};

export const normaliseAdjParadigm = (html) => {
  const doc = new DOMParser().parseFromString(html);
  const tables = xpath.select('.//table', doc);
  const tableRows = xpath.select('.//tr', tables[1]);
  const want = {};
  let splits = [];

  tableRows.forEach((tr) => {
    const idText = xpath.select('.//td', tr)[1].firstChild.data;
    const wordForms = xpath.select('.//font[@color="red"]', tr)
        .map((font) => font.firstChild.data);

    splits = idText.split(' ');
    if (
      (splits.length === 3 && num.has(splits[1])) || 
       (splits.length === 2)
    ) {
      splits.splice(1, 0, 'Positive');
    }

    if (splits.length === 3) {
      if (splits[2] === 'Attr') {
        if (!want[splits[2]]) {
          want[splits[2]] = {};
        }
        want[splits[2]][splits[1]] = wordForms;
      } else {
        splits.splice(2, 0, 'Both');
      }
    }

    if (splits.length === 4) {
      if (!want[splits[2]]) {
        want[splits[2]] = {};
      }
      if (!want[splits[2]][splits[3]]) {
        want[splits[2]][splits[3]] = {};
      }
      want[splits[2]][splits[3]][splits[1]] = wordForms;
    }
  });

  return want;
};

export const normaliseVerbParadigm = (html) => {
  const doc = new DOMParser().parseFromString(html);
  const tables = xpath.select('.//table', doc);
  const tableRows = xpath.select('.//tr', tables[1]);
  const want = {};
  let splits = [];

  tableRows.forEach((tr) => {
    const idText = xpath.select('.//td', tr)[1].firstChild.data;
    const wordForms = xpath.select('.//font[@color="red"]', tr)
        .map((font) => font.firstChild.data);

    if (verbSet.has(idText)) {
      want[idText] = {};
      verbNumber.forEach((number, i) => {
        want[idText][number] = wordForms.map((word) => `(${verbDict.sme[idText][i]}) ${word}`);
      });
    } else {
      splits = idText.split(' ');
      if (splits.length === 4 && splits[3] !== 'ConNeg') {
        if (!want[splits[2]]) {
          want[splits[2]] = {};
        }
        want[splits[2]][splits[3]] = wordForms;
      }
    }
  });

  return want;
};
