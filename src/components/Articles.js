import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { Div, Span, A } from 'glamorous';
import { ArticleDiv } from '../components';
import {
  normaliseDict,
  normaliseTermWiki,
  normaliseSDTerm } from '../utils';
import { List } from 'immutable';

const addKorpLink = (lang, lemma) => {
  const korpLangs = Set.of('sma', 'sme', 'smj', 'smn', 'sms');

  if (korpLangs.has(lang)) {
    const searchString = `Search for ${lemma} in Korp`;
    const korpAddress = (lang !== 'sme' && korpLangs.has(lang))
                        ? `http://gtweb.uit.no/korp/?mode=${lang}#?search=cqp|[lemma%3D"${lemma}"]`
                        : `http://gtweb.uit.no/korp/#?search=cqp|[lemma%3D"${lemma}"]`;
    return <A href={korpAddress} target='_blank'>{searchString}</A>;
  } else {
    return '';
  }
};

class Stems extends Component {
  render () {
    const stems = this.props.stems.map((stem, i) => {
      if (i === 0) {
        return <Div key={i}>{stem.lemma} {stem.pos} {stem.lang} {addKorpLink(stem.lang, stem.lemma)}</Div>;
      } else {
        return <Div key={i} css={{marginLeft: '2%'}}><Span css={{fontWeight: 'bold'}}>{stem.lemma}</Span> {stem.pos} {stem.lang} {addKorpLink(stem.lang, stem.lemma)}</Div>;
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
