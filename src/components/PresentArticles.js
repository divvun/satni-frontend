import React from 'react';
import { css } from 'react-emotion';

import DictArticle from './DictArticle';
import TermWikiArticle from './TermWikiArticle';
import SDTermArticle from './SDTermArticle';
import FetchArticlesError from './FetchArticlesError';

const Articles = ({isFetching, articles, errorMessage}) => {
  if (errorMessage) {
    return (
      <FetchArticlesError message={errorMessage} />
    );
  }

  if (isFetching) {
    return <div>Loading articles …</div>;
  }

  return (
    <div className={css({
      margin: 'auto',
      paddingLeft: '0.60em',
      paddingRight: '1.75em',
      textAlign: 'left',
      position: 'relative'
    })}>
      {articles.map((article, i) => {
        if (article.dict === 'JustermTana' || article.dict === 'termwiki' || article.dict === 'mekanikk-1999') {
          return <TermWikiArticle
            key={i}
            stems={article.stems}
            termwikiref={article.termwikiref}
            dictionary={article.dict} />;
        }

        if (article.termwikiref === '-1') {
          return <DictArticle
            key={i}
            stems={article.translations}
            examples={article.examples}
            dictionary={article.dict} />;
        }

        return <SDTermArticle
          key={i}
          stems={article.stems}
          dictionary={article.dict} />;
      })}
    </div>
  );
};

export default Articles;
