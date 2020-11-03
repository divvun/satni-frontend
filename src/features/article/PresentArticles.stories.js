import React from 'react';

import PresentArticles from './PresentArticles';
import { conceptList, dictEntryList } from 'utils.data';

export default {
  title: 'PresentArticles',
};

export const VuorkaDictsAndTerms = () => (
  <PresentArticles lemma="vuorká" data={{ conceptList, dictEntryList }} />
);

VuorkaDictsAndTerms.story = {
  name: 'vuorka dicts and terms',
};
