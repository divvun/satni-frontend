import React, { Component } from 'react';
import PropTypes from 'prop-types';

const translationStems = (tg) => {
  let stems = [];
  let t = tg.t;
  if (t instanceof Object && t instanceof Array) {
    t.forEach((tr) => {
      let stem = {};
      stem['lemma'] = tr['#text'];
      stem['lang'] = tg['xml:lang'];
      stem['pos'] = tr.pos;
      stems.push(stem);
    });
  } else {
    let stem = {};
    stem['lemma'] = tg.t['#text'];
    stem['lang'] = tg['xml:lang'];
    stem['pos'] = tg.t.pos;
    stems.push(stem);
  }

  return stems;
};

const normaliseDict = (existDict) => {
  let stem = {};
  stem['lemma'] = existDict.term;
  stem['lang'] = existDict.lang;
  stem['pos'] = existDict.pos;

  let translations = translationStems(existDict.tg);
  translations.unshift(stem);

  return translations;
};

const term2dict = {
  'se': 'sme',
  'fi': 'fin',
  'nb': 'nob',
  'nor': 'nob',
  'nn': 'nno',
  'sv': 'swe',
  'smn': 'smn',
  'sma': 'sma',
  'smj': 'smj',
  'lat': 'lat',
  'en': 'eng'
};

const normaliseTermWiki = (existTerm) => {
  const terms = [];

  existTerm.tg.forEach((tg) => {
    let stem = {};
    stem['lemma'] = tg.t['#text'].trim();
    stem['lang'] = term2dict[tg['xml:lang']];
    stem['pos'] = tg.t.pos;

    if (stem['lemma'] === existTerm.term.trim()) {
      terms.unshift(stem);
    } else {
      terms.push(stem);
    }
  });

  return terms;
};

const sdTranslationStems = (t, lang, pos) => {
  let stems = [];

  if (t instanceof Object && t instanceof Array) {
    t.forEach((tr) => {
      let stem = {};
      stem['lemma'] = tr.trim();
      stem['lang'] = lang;
      stem['pos'] = pos;
      stems.push(stem);
    });
  } else {
    let stem = {};
    stem['lemma'] = t.trim();
    stem['lang'] = lang;
    stem['pos'] = pos;
    stems.push(stem);
  }

  return stems;
};

const normaliseSDTerm = (existTerm) => {
  console.log(existTerm);
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

class Stems extends Component {
  render () {
    const stems = this.props.stems.map((stem, i) => {
      if (i === 0) {
        return <dt key={i}>{stem.lemma} {stem.pos} {stem.lang}</dt>;
      } else {
        return <dd key={i}>{stem.lemma} {stem.pos} {stem.lang}</dd>;
      }
    });

    return (
      <dl>{stems}</dl>
    );
  }
}

export default class Posts extends Component {
  render () {
    let data = this.props.posts;
    const isjson = (data.indexOf('{') === 0) ? '[' + data.slice(data.indexOf('{') + 1, data.lastIndexOf('}')) + ']' : data;
    return (
      <div>
        {JSON.parse(isjson).map((post, i) => {
          if (post.termwikiref === '-1') {
            let stems = normaliseDict(post);
            return <Stems key={i} stems={stems} />;
          } else if (post.dict === 'termwiki') {
            let stems = normaliseTermWiki(post);
            return <Stems key={i} stems={stems} />;
          } else {
            let stems = normaliseSDTerm(post);
            return <Stems key={i} stems={stems} />;
          }
        })}
      </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.string.isRequired
};
