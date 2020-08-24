import React from 'react';
import { storiesOf } from '@storybook/react';

import LemmaGroup from './LemmaGroup';

const term = {
  'expression': {
    'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhZA==',
    'language': 'sme',
    'lemma': 'vuorká',
    'pos': 'N'
  },
  'note': 'vuorkánote',
  'sanctioned': true,
  'source': 'vuorkásource',
  'status': 'vuorkástatus'
};

storiesOf('LemmaGroup', module)
  .add('srcLanguage', () => <LemmaGroup
    term={term} />)
  .add('targetLanguage', () => <LemmaGroup
    term={term} withLink/>);
