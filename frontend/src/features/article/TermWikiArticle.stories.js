import React from 'react';
import { storiesOf } from '@storybook/react';

import TermWikiArticle from './TermWikiArticle';

const termGroup = {
  'termwikiref': 'Luonddudieđa ja matematihkka:x33543',
  'category': 'Luonddudieđa ja matematihkka',
  'dict': 'termwiki',
  'from': {
    'definition': '',
    'language': 'swe',
    'termSet': [
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
    'termSet': [
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

storiesOf('TermWikiArticle', module)
  .add('default', () => <TermWikiArticle
    termGroup={termGroup} />);
