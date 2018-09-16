import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Div, Span, A } from 'glamorous';
import { ArticleDiv } from '../components';
import {
  normaliseDict,
  normaliseTermWiki,
  normaliseSDTerm } from '../utils';
import { Set } from 'immutable';

const addKorpLink = (lang, lemma) => {
  const korpLangs = Set.of('sma', 'sme', 'smj', 'smn', 'sms');

  if (korpLangs.has(lang)) {
    const searchString = `Search for ${lemma} in Korp`;
    const korpAddress = (lang !== 'sme' && korpLangs.has(lang))
                        ? `http://gtweb.uit.no/korp/?mode=${lang}#?search=cqp|[lemma%3D"${lemma}"]`
                        : `http://gtweb.uit.no/korp/#?search=cqp|[lemma%3D"${lemma}"]`;
    return <Div css={{float: 'right', display: 'inline'}}><A href={korpAddress} target='_blank'>{searchString}</A></Div>;
  } else {
    return '';
  }
};

const presentationStems = (stems) => {
  return stems.map((stem, i) => {
    if (i === 0) {
      return (
        <Div key={i} css={{width: '100%'}}>
          <Div css={{ display: 'inline'}}>{stem.lemma} {stem.pos} {stem.lang}</Div>
          {addKorpLink(stem.lang, stem.lemma)}
        </Div>
      );
    } else {
      return (
        <Div key={i} css={{width: '100%'}}>
          <Div css={{marginLeft: '2%', display: 'inline'}}><Span css={{fontWeight: 'bold'}}>{stem.lemma}</Span> {stem.pos} {stem.lang}</Div>
          {addKorpLink(stem.lang, stem.lemma)}
        </Div>
      );
    }
  });
};

const Stems = ({stems}) => (
  <Div>{presentationStems(stems)}</Div>
);

const presentationExamples = (examples) => {
  examples.map((example, i) => (
    <Div key={i} css={{ paddingTop: '3%', paddingLeft: '2%'}}>
      <Div>{example.x}</Div>
      <Div css={{fontStyle: 'italic'}}>{example.xt}</Div>
    </Div>)
  );
};

const Examples = ({examples}) => (
  <Div>{presentationExamples(examples)}</Div>
);

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

const TermArticle = ({article}) => (
  <ArticleDiv>
    <Stems stems={normaliseTermWiki(article)} />
    <Div css={{textAlign: 'right', marginTop: '1%', paddingBottom: '0', fontSize: '90%'}}>
      <a
        href={`https://satni.uit.no/termwiki/index.php?title=${article.termwikiref}`}
        target='_blank'
          >This article on the TermWiki</a>
    </Div>
  </ArticleDiv>
);

const SDTermArticle = ({article}) => (
  <ArticleDiv>
    <Stems stems={normaliseSDTerm(article)} />
    <Div css={{textAlign: 'right', paddingTop: '1%', paddingBottom: '0', fontSize: '90%'}}>Source: {article.dict}</Div>
  </ArticleDiv>
);

const Articles = ({articles}) => (
  <Div css={{
    margin: 'auto',
    paddingLeft: '0.60em',
    paddingRight:
      '1.75em',
    textAlign: 'left'
  }}>
    {articles.map((article, i) => {
      if (article.termwikiref === '-1') {
        return <DictArticle key={i} article={article} />;
      } else if (article.dict === 'termwiki') {
        return <TermArticle key={i} article={article} />;
      } else {
        return <SDTermArticle key={i} article={article} />;
      }
    })}
  </Div>
);

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Articles;
