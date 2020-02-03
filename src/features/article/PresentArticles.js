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
            termGroup={article} />;
        } else {
          return <DictArticle
            dictGroup={article} />;
        }
      })}
    </div>
  );
};

export default Articles;
