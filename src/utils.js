import xpath from 'xpath';
import {DOMParser} from 'xmldom';
import { Set } from 'immutable';

const num = Set.of('Sg', 'Pl');

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

export const normaliseArticles = (existTerms) => {
  return removeDuplicates(existTerms).map((existTerm) => {
    if (existTerm.termwikiref === '-1') {
      return normaliseDict(existTerm);
    } else if (existTerm.dict === 'termwiki') {
      return normaliseTermWiki(existTerm);
    } else {
      return normaliseSDTerm(existTerm);
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

  return {
    translations,
    examples,
    termwikiref: existDict.termwikiref,
    dict: existDict.dict
  };
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

  return {
    stems: terms,
    termwikiref: existTerm.termwikiref,
    dict: existTerm.dict
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

  return {
    stems: terms,
    dict: existTerm.dict
  };
};

const normaliseNounParadigm = (html) => {
  const doc = new DOMParser().parseFromString(html);
  const tables = xpath.select('.//table', doc);
  const tableRows = xpath.select('.//tr', tables[1]);
  const want = {};
  let splits = [];

  tableRows.forEach((tr) => {
    splits = xpath.select('.//td', tr)[1].firstChild.data.split(' ');
    if (splits.length < 4) {
      if (splits.length === 3) {
        if (!want[splits[2]]) {
          want[splits[2]] = {};
        }
        want[splits[2]][splits[1]] = xpath.select('.//font[@color="red"]', tr)
          .map((font) => font.firstChild.data);
      } else {
        want[splits[1] + '_both'] = xpath.select('.//font[@color="red"]', tr)
          .map((font) => font.firstChild.data);
      }
    }
  });

  return want;
};

const normaliseAdjParadigm = (html) => {
  const doc = new DOMParser().parseFromString(html);
  const tables = xpath.select('.//table', doc);
  const tableRows = xpath.select('.//tr', tables[1]);
  const want = {};
  let splits = [];

  tableRows.forEach((tr) => {
    splits = xpath.select('.//td', tr)[1].firstChild.data.split(' ');
    if (
      (splits.length === 3 && num.has(splits[1]))
      || (splits.length == 2)
    ) {
      splits.splice(1, 0, 'Positive');
    }

    if (splits.length === 4) {
      if (!want[splits[2]]) {
        want[splits[2]] = {};
      }
      if (!want[splits[2]][splits[3]]) {
        want[splits[2]][splits[3]] = {};
      }
      want[splits[2]][splits[3]][splits[1]] = xpath.select('.//font[@color="red"]', tr)
        .map((font) => font.firstChild.data);
    }
    if (splits.length === 3) {
      const caseClass = splits[2] === 'Attr' ? splits[2] : splits[2] + '_both';
      if (!want[caseClass]) {
        want[caseClass] = {};
      }

      want[caseClass][splits[1]] = xpath.select('.//font[@color="red"]', tr)
        .map((font) => font.firstChild.data);
    }
  });

  return want;
};

export {
  toJson, removeDuplicates, translationStems, translationExamples,
  normaliseDict, normaliseTermWiki, normaliseSDTerm, normaliseNounParadigm,
  normaliseAdjParadigm
};
