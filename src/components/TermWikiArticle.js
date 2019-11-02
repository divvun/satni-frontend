import React from 'react';
import { css } from 'react-emotion';

import { ArticleDiv } from '../components';
import TermStems from './TermStems';
import Source from './Source';

const TermWikiArticle = ({stems, termwikiref, dictionary}) => {
  return (
    <ArticleDiv>
      <TermStems stems={stems} />
      <div className={css({
        textAlign: 'right',
        marginTop: '1%',
        paddingBottom: '0',
        fontSize: '90%'
      })}>
        {dictionary === 'termwiki'
        ? <a
          href={`https://satni.uit.no/termwiki/index.php?title=${termwikiref}`}
          target='_blank' rel='noopener noreferrer'>
          This article on the TermWiki
        </a>
        : <Source source={dictionary} />
        }
      </div>
    </ArticleDiv>
  );
};

export default TermWikiArticle;
