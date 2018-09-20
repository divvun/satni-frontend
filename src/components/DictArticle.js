import React from 'react';
import { Div} from 'glamorous';

import { ArticleDiv } from '../components';
import Examples from './Examples';
import Stems from './Stems';

const DictArticle = ({stems, examples, dictionary}) => {
  return (
    <ArticleDiv>
      <Stems stems={stems} />
      {examples && (<Examples examples={examples} />)}
      <Div css={{textAlign: 'right', marginTop: '1%', paddingBottom: '0', fontSize: '90%'}}>Source: {dictionary}</Div>
    </ArticleDiv>
  );
};

export default DictArticle;
