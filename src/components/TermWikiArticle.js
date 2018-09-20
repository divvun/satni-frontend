import React from 'react';
import { Div, A } from 'glamorous';

import { ArticleDiv } from '../components';
import Stems from './Stems';

const TermWikiArticle = ({stems, termwikiref}) => {
  return (
    <ArticleDiv>
      <Stems stems={stems} />
      <Div css={{textAlign: 'right', marginTop: '1%', paddingBottom: '0', fontSize: '90%'}}>
        <A
          href={`https://satni.uit.no/termwiki/index.php?title=${termwikiref}`}
          target='_blank'
            >This article on the TermWiki</A>
      </Div>
    </ArticleDiv>
  );
};

export default TermWikiArticle;
