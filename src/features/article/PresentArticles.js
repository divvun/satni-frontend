import React from 'react';
import { css } from 'react-emotion';

import { dictPosts, termwikiPosts} from 'utils';
import DictArticle from './DictArticle';
import TermWikiArticle from './TermWikiArticle';

const mapByLanguagePair = (accumulator, currentValue) => {
  const key = currentValue.stems.map(stem => stem.language).join('');
  if (accumulator[key]) {
    accumulator[key] = [...accumulator[key], currentValue];
  } else {
    accumulator[key] = [currentValue];
  }
  return accumulator;
};

const Articles = ({articles}) => {
  const articlesByLanguagePair = articles.map(article => article.dict === 'termwiki' ? termwikiPosts(article.stems[0].lemma, article) : dictPosts(article));
  const articlesMappedByLanguagePair = articlesByLanguagePair.flat().reduce(mapByLanguagePair, {});

  return (
    <div className={css({
      margin: 'auto',
      paddingLeft: '0.60em',
      paddingRight: '1.75em',
      textAlign: 'left',
      position: 'relative'
    })}>
    {Object.keys(articlesMappedByLanguagePair).map(langpair => {
      return <>
      <div>{langpair}</div>
      {articlesMappedByLanguagePair[langpair].map((article, i) => {
        if (article.dict === 'termwiki') {
          return <TermWikiArticle
            termGroup={article} />;
        } else {
          return <DictArticle
            dictGroup={article} />;
        }
      })}
      </>;
    })}
    </div>
  );
};

export default Articles;
