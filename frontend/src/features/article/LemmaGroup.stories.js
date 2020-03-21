import React from 'react';
import { storiesOf } from '@storybook/react';

import LemmaGroup from './LemmaGroup';

const paradigm = {
  'V+Inf': [
    'váldit'
  ],
  'V+Ind+Prs+Sg1': [
    'válddán'
  ],
  'V+Ind+Prs+Sg2': [
    'válddát'
  ],
  'V+Ind+Prs+Sg3': [
    'váldá'
  ],
  'V+Ind+Prs+Du1': [
    'válde'
  ]
};

const stems = [
  { id: '68360', lemma: 'bárdni', language: 'sme', partOfSpeech: 'N' },
  { id: '68363', lemma: 'sønn', language: 'nob', partOfSpeech: 'N' },
  {
    id: '68362',
    lemma: 'kjæreste',
    language: 'nob',
    partOfSpeech: 'N'
  },
  { id: '68361', lemma: 'ungkar', language: 'nob', partOfSpeech: 'N' },
  { id: '7661', lemma: 'gutt', language: 'nob', partOfSpeech: 'N' }
];

const stem = { lemma: 'váldit', pos: 'Verb', lang: 'sme'};

storiesOf('LemmaGroup', module)
  .add('default', () => <LemmaGroup stem={stem} paradigm={paradigm} />);
