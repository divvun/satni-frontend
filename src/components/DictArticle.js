import React from 'react';

import { ArticleDiv } from '../components';
import Examples from './Examples';
import Stems from './Stems';
import Source from './Source';

const DictArticle = ({stems, examples, dictionary}) => {
  return (
    <ArticleDiv>
      <Source source={dictionary} lemma={stems[0].lemma} />
      <Stems stems={stems} />
      {examples && (<Examples examples={examples} />)}
    </ArticleDiv>
  );
};

export default DictArticle;
