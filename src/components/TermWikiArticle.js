import React from 'react';
import { css } from 'react-emotion';

import { ArticleDiv } from '../components';
import TermStems from './TermStems';

const TermWikiArticle = ({stems, termwikiref, dictionary}) => {
  const category = termwikiref.split(':')[0];
  return (
    <ArticleDiv>
      <div className={css({
        textAlign: 'center',
        fontSize: '110%'
      })}>
        Source: <a
          href={`https://satni.uit.no/termwiki/index.php?title=${termwikiref}`}
          target='_blank' rel='noopener noreferrer'>TermWiki</a>
      </div>
      <TermStems stems={stems} />
      <div>Category: <a href={`https://satni.uit.no/termwiki/index.php?title=Kategoriija:${category}`}
        target='_blank' rel='noopener noreferrer'>{category}</a></div>
    </ArticleDiv>
  );
};

export default TermWikiArticle;
