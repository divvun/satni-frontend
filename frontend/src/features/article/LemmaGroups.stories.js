import React from 'react';
import { storiesOf } from '@storybook/react';

import LemmaGroups from './LemmaGroups';

const termGroup = {
  'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
  'category': 'Luonddudieđa ja matematihkka',
  'dict': 'termwiki',
  'from': {
    'definition': '',
    'language': 'swe',
    'terms': [
      {
        'id': '52476',
        'language': 'swe',
        'lemma': 'lim',
        'pos': ''
      }
    ]
  },
  'to': {
    'definition': 'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
    'language': 'sme',
    'terms': [
      {
        'id': '52479',
        'language': 'sme',
        'lemma': 'liima',
        'pos': 'N'
      },
      {
        'id': '52477',
        'language': 'sme',
        'lemma': 'liibma',
        'pos': 'N'
      }
    ]
  }
};

storiesOf('LemmaGroups', module)
  .add('default', () => <LemmaGroups from={termGroup.from.terms} to={termGroup.to.terms} />);
