import React from 'react';
import { storiesOf } from '@storybook/react';

import TermWikiArticle from './TermWikiArticle';

const termGroup = {
  'category': 'Dihtorteknologiija ja diehtoteknihkka',
  'dict': 'termwiki',
  'collections': [
    'Historjá- já ohtsâškodde',
    'Ekonomia 02/2017'
  ],
  'from': {
    'definition': 'smedefinition',
    'explanation': 'smeexpl',
    'language': 'sme',
    'terms': [
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
      }
    ]
  },
  'termwikiref': 'Dihtorteknologiija ja diehtoteknihkka:fiila',
  'to': {
    'definition': 'smadefinition',
    'explanation': 'smaexpl',
    'language': 'sma',
    'terms': [
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
    ]
  }
};

storiesOf('TermWikiArticle', module)
  .add('default', () => <TermWikiArticle
    termGroup={termGroup} />);
