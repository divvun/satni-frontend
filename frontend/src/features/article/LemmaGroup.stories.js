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

const stem = { lemma: 'váldit', pos: 'Verb', lang: 'sme'};

storiesOf('LemmaGroup', module)
  .add('default', () => <LemmaGroup stem={stem} paradigm={paradigm} />);
