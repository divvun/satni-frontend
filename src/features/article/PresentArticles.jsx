/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import {
  dictBackend2Frontend,
  multilingualconceptListsByNames,
  orderedMultilingualConcept,
} from '../../utils';
import DictArticle from './DictArticle';
import TermWikiArticle from './TermWikiArticle';

const useStyles = makeStyles((theme) => ({
  articles: {
    height: '80vh',
    overflowY: 'auto',
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}));

const Articles = ({ data, lemma }) => {
  const classes = useStyles();
  const { dictEntryList, conceptList } = data;
  const termsByNames = conceptList
    ? multilingualconceptListsByNames(conceptList)
    : {};
  return (
    <div className={classes.articles}>
      {dictEntryList &&
        dictEntryList.map((dictEntry, index) => (
          <DictArticle
            dictGroup={dictBackend2Frontend(dictEntry)}
            lemma={lemma}
            key={index}
          />
        ))}
      {conceptList &&
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
    </div>
  );
};

Articles.propTypes = {
  data: PropTypes.shape.isRequired,
  lemma: PropTypes.string.isRequired,
};

export default Articles;
