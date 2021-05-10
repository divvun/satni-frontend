import React from 'react';

import TermWikiArticle from './TermWikiArticle';
import {
  multilingualconceptListsByNames,
  orderedMultilingualConcept,
} from 'utils';
import { conceptList } from 'utils.data';

const lemma = 'vuorká';
const termsByNames = multilingualconceptListsByNames(conceptList);

export default {
  title: 'TermWikiArticle',
};

export const Default = () => (
  <TermWikiArticle
    category="Servodatdieđa"
    multiLingualConcept={orderedMultilingualConcept(
      lemma,
      termsByNames['Servodatdieđa:vurkkohat'],
    )}
    lemma={lemma}
  />
);

Default.story = {
  name: 'default',
};
