/* eslint-disable react/no-array-index-key */

import React from 'react';

import {
  dictBackend2Frontend,
  type BackendDictArticle,
} from '../../utils';
import DictArticle from './DictArticle';

interface PresentDictArticlesProps {
  lemma: string;
  dictEntryList: BackendDictArticle[];
}

const PresentDictArticles: React.FC<PresentDictArticlesProps> = ({
  lemma,
  dictEntryList,
}) => (
  <>
    {dictEntryList.map((dictEntry, index) => (
      <DictArticle
        dictGroup={dictBackend2Frontend(dictEntry)}
        lemma={lemma}
        key={index}
      />
    ))}
  </>
);

export default PresentDictArticles;
