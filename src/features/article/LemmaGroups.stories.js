import React from 'react';
import { storiesOf } from '@storybook/react';

import LemmaGroups from './LemmaGroups';

const lemmaGroups = [
  {
    stem: {
      lemma: 'váldit',
      pos: 'Verb'
    },
    paradigm: {
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
    }
  },
  {
    stem: {
      lemma: 'ta',
      pos: 'Verb'
    },
    paradigm: {
      'V+Inf': [
        'ta'
      ],
      'V+Ind+Prs+Sg1': [
        'tar'
      ],
      'V+Ind+Prs+Sg2': [
        'tok'
      ],
      'V+Ind+Prs+Sg3': [
        'tatt'
      ]
    }
  }
];

storiesOf('LemmaGroups', module)
  .add('default', () => <LemmaGroups lemmaGroups={lemmaGroups} />);
