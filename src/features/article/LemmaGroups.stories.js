import React from 'react';
import { storiesOf } from '@storybook/react';

import LemmaGroups from './LemmaGroups';

const terms = [
  {
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
  },
  {
    'expression': {
      'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhYw==',
      'language': 'sme',
      'lemma': 'fiila',
      'pos': 'N'
    },
    'note': 'fiilanote',
    'sanctioned': true,
    'source': 'fiilasource',
    'status': 'fiilastatus'
  },
  {
    'expression': {
      'id': 'TGVtbWFUeXBlOjVlZDk1NjZlN2JkZmY0ODc0YzViNmJhOQ==',
      'language': 'sma',
      'lemma': 'fijle',
      'pos': 'N'
    },
    'note': 'smanote ',
    'sanctioned': true,
    'source': 'smasource',
    'status': 'smastatus'
  }
];

storiesOf('LemmaGroups', module)
  .add('default', () => <LemmaGroups
    lemma='vuorká'
    terms={terms}
  />);
