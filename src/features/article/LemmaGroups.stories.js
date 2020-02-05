import React from 'react';
import { storiesOf } from '@storybook/react';

import LemmaGroups from './LemmaGroups';

const stems = [
  {
    lemma: 'váldit',
    pos: 'Verb',
    language: 'sme'
  },
  {
    lemma: 'ta',
    pos: 'Verb',
    language: 'nob'
  }
];

storiesOf('LemmaGroups', module)
  .add('default', () => <LemmaGroups stems={stems} />);
