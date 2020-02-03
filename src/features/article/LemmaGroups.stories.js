import React from 'react';
import { storiesOf } from '@storybook/react';

import LemmaGroups from './LemmaGroups';

const stems = [
  {
    lemma: 'váldit',
    pos: 'Verb'
  },
  {
    lemma: 'ta',
    pos: 'Verb'
  }
];

storiesOf('LemmaGroups', module)
  .add('default', () => <LemmaGroups stems={stems} />);
