import React from 'react';
import { storiesOf } from '@storybook/react';

import LemmaGroup from './LemmaGroup';

const term = {
  'expression': {
    'language': 'sme',
    'lemma': 'vuorká',
    'presentationLemma': 'vuorká',
    'pos': 'N'
  },
  'note': 'vuorkánote',
  'sanctioned': true,
  'source': 'vuorkásource',
  'status': 'vuorkástatus'
};

storiesOf('LemmaGroup', module)
  .add('no link', () => <LemmaGroup
    lemma='vuorká'
    term={term}
  />)
  .add('with link', () => <LemmaGroup
    lemma='aka'
    term={term}
  />);
