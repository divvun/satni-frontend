import React from 'react';
import { css } from 'react-emotion';

import DictArticle from './DictArticle';
import TermWikiArticle from './TermWikiArticle';

const Articles = ({articles}) => {
  return (
    <div className={css({
      margin: 'auto',
      paddingLeft: '0.60em',
      paddingRight: '1.75em',
      textAlign: 'left',
      position: 'relative'
    })}>
      {articles.map((article, i) => {
        if (article.dict === 'termwiki') {
          return <TermWikiArticle
            key={i}
            stems={article.stems}
            termwikiref={article.termwikiref}
            dictionary={article.dict} />;
        } else {
          return <DictArticle
            key={i}
            stems={article.translations}
            examples={article.examples}
            dictionary={article.dict} />;
        }
      })}
    </div>
  );
};

export default Articles;
