/* eslint-disable react/no-array-index-key */

import PropTypes from 'prop-types';

import { dictBackend2Frontend } from '../../utils';
import DictArticle from './DictArticle';

const PresentDictArticles = ({ lemma, dictEntryList }) => (
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

PresentDictArticles.propTypes = {
  dictEntryList: PropTypes.shape.isRequired,
  lemma: PropTypes.string.isRequired,
};

export default PresentDictArticles;
