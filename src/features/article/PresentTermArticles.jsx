/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import { orderedMultilingualConcept } from '../../utils';
import TermWikiArticle from './TermWikiArticle';

const PresentTermArticles = ({ lemma, termsByNames }) => (
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

PresentTermArticles.propTypes = {
  termsByNames: PropTypes.shape.isRequired,
  lemma: PropTypes.string.isRequired,
};

export default PresentTermArticles;
