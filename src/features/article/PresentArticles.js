import React from 'react';

import {
  dictBackend2Frontend,
  multilingualconceptListsByNames,
  orderedMultilingualConcept
} from 'utils';
import DictArticle from './DictArticle';
import PropTypes from 'prop-types';
import TermWikiArticle from './TermWikiArticle';

const Articles = ({data, lemma}) => {
  const { dictEntryList, conceptList } = data;
  const termsByNames = conceptList ?
    multilingualconceptListsByNames(conceptList) : {};
  return (
    <>
      {dictEntryList && dictEntryList.map((dictEntry, index) => (
        <DictArticle
          dictGroup={dictBackend2Frontend(dictEntry)}
          lemma={lemma}
          key={index}
        />
      ))}
      {conceptList && Object.keys(termsByNames).map((name, index) => (
        <TermWikiArticle
          key={index}
          category={name.split(':')[0]}
          multiLingualConcept={orderedMultilingualConcept(lemma, termsByNames[name])}
          lemma={lemma}
        />
      ))}
    </>
  );
};

Articles.propTypes = {
  data: PropTypes.object.isRequired,
  lemma: PropTypes.string.isRequired
};

export default Articles;
