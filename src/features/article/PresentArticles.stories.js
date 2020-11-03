import React from 'react';
import { storiesOf } from '@storybook/react';

import PresentArticles from './PresentArticles';
import { conceptList, dictEntryList } from 'utils.data';

storiesOf('PresentArticles')
  .add('vuorka dicts and terms', () => <PresentArticles
    lemma='vuorká'
    data={{conceptList, dictEntryList}} />);
