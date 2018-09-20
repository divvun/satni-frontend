import React from 'react';
import { Div} from 'glamorous';

import { ArticleDiv } from '../components';
import Examples from './Examples';
import Stems from './Stems';
import Source from './Source';

const DictArticle = ({stems, examples, dictionary}) => {
  return (
    <ArticleDiv>
      <Stems stems={stems} />
      {examples && (<Examples examples={examples} />)}
      <Source source={dictionary} />
    </ArticleDiv>
  );
};

export default DictArticle;
