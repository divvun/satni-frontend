import React from 'react';
import { Div} from 'glamorous';

import DictArticle from './DictArticle';
import TermWikiArticle from './TermWikiArticle';
import SDTermArticle from './SDTermArticle';

const Articles = ({isFetching, articles}) => {
  if (isFetching) {
    return <Div>Loading …</Div>;
  }

  return (
    <Div css={{
      margin: 'auto',
      paddingLeft: '0.60em',
      paddingRight: '1.75em',
      textAlign: 'left',
      position: 'relative'
    }}>
      {articles.map((article, i) => {
        if (article.termwikiref === '-1') {
          return <DictArticle
            key={i}
            stems={article.translations}
            examples={article.examples}
            dictionary={article.dict} />;
        } else if (article.dict === 'termwiki') {
          return <TermWikiArticle
            key={i}
            stems={article.stems}
            termwikiref={article.termwikiref} />;
        } else {
          return <SDTermArticle
            key={i}
            stems={article.stems}
            dictionary={article.dict} />;
        }
      })}
    </Div>
  );
};

export default Articles;
