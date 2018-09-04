import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Div, Span } from 'glamorous';
import {
  ArticleDiv
} from '../components';

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

const translationExamples = (tg) => {
  let examples = [];
  let xg = tg.xg;
  if (xg instanceof Object && xg instanceof Array) {
    xg.forEach((x) => {
      let example = {
        'x': x.x,
        'xt': x.xt
      };
      examples.push(example);
    });
  } else {
    let example = {
      'x': xg.x,
      'xt': xg.xt
    };
    examples.push(example);
  }

  return examples;
};

const normaliseDict = (existDict) => {
  let stem = {};
  stem['lemma'] = existDict.term;
  stem['lang'] = existDict.lang;
  stem['pos'] = existDict.pos;

  let translations = translationStems(existDict.tg);
  translations.unshift(stem);

  let examples = existDict.tg.xg ? translationExamples(existDict.tg) : [];

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
      try {
        let stem = {};
        stem['lemma'] = tg.t['#text'].trim();
        stem['lang'] = term2dict[tg['xml:lang']];
        stem['pos'] = tg.t.pos;

        if (stem['lemma'] === existTerm.term.trim()) {
          terms.unshift(stem);
        } else {
          terms.push(stem);
        }
      } catch (TypeError) {

      }
    });
  } else {
    try {
      let stem = {};
      stem['lemma'] = tg.t['#text'].trim();
      stem['lang'] = term2dict[tg['xml:lang']];
      stem['pos'] = tg.t.pos;
      terms.push(stem);
    } catch (TypeError) {

    }
  }

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
        return <Div key={i}>{stem.lemma} {stem.pos} {stem.lang}</Div>;
      } else {
        return <Div key={i} css={{marginLeft: '2%'}}><Span css={{fontWeight: 'bold'}}>{stem.lemma}</Span> {stem.pos} {stem.lang}</Div>;
      }
    });

    return (
      <Div>{stems}</Div>
    );
  }
}

class Examples extends Component {
  render () {
    const examples = this.props.examples.map((example, i) => (
      <Div key={i} css={{ paddingTop: '3%', paddingLeft: '2%'}}>
        <div>{example.x}</div>
        <Div css={{fontStyle: 'italic'}}>{example.xt}</Div>
      </Div>)
    );
    return (
      <div>{examples}</div>
    );
  }
}

class DictArticle extends Component {
  render () {
    const {translations, examples} = normaliseDict(this.props.article);
    return (
      <ArticleDiv>
        <Stems stems={translations} />
        <Examples examples={examples} />
        <Div css={{textAlign: 'right', marginTop: '1%', paddingBottom: '0', fontSize: '90%'}}>Source: {this.props.article.dict}</Div>
      </ArticleDiv>
    );
  }
}

class TermArticle extends Component {
  render () {
    return (
      <ArticleDiv>
        <Stems stems={normaliseTermWiki(this.props.article)} />
        <Div css={{textAlign: 'right', marginTop: '1%', paddingBottom: '0', fontSize: '90%'}}>
          <a
            href={`https://satni.uit.no/termwiki/index.php?title=${this.props.article.termwikiref}`}
            target='_blank'
          >This article on the TermWiki</a>
        </Div>
      </ArticleDiv>
    );
  }
}

class SDTermArticle extends Component {
  render () {
    return (
      <ArticleDiv>
        <Stems stems={normaliseSDTerm(this.props.article)} />
        <Div css={{textAlign: 'right', paddingTop: '1%', paddingBottom: '0', fontSize: '90%'}}>Source: {this.props.article.dict}</Div>
      </ArticleDiv>
    );
  }
}

export default class Articles extends Component {
  render () {
    return (
      <div className={css({ margin: 'auto', paddingLeft: '0.60em', paddingRight: '1.75em', textAlign: 'left' })}>
        {this.props.articles.map((article, i) => {
          if (article.termwikiref === '-1') {
            return <DictArticle key={i} article={article} />;
          } else if (article.dict === 'termwiki') {
            return <TermArticle key={i} article={article} />;
          } else {
            return <SDTermArticle key={i} article={article} />;
          }
        })}
      </div>
    );
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};
