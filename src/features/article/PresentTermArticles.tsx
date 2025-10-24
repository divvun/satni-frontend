/* eslint-disable react/no-array-index-key */

import React from 'react';

import { orderedMultilingualConcept } from '../../utils';
import TermWikiArticle from './TermWikiArticle';

interface TermsByNames {
  [key: string]: any;
}

interface PresentTermArticlesProps {
  lemma: string;
  termsByNames?: TermsByNames;
}

const PresentTermArticles: React.FC<PresentTermArticlesProps> = ({
  lemma,
  termsByNames,
}) => (
  <>
    {termsByNames &&
      Object.keys(termsByNames).map((name, index) => (
        <TermWikiArticle
          key={index}
          category={name.split(':')[0]}
          multiLingualConcept={orderedMultilingualConcept(
            lemma,
            termsByNames[name],
          )}
          lemma={lemma}
        />
      ))}
  </>
);

export default PresentTermArticles;
