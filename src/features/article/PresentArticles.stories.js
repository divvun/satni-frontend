import React from 'react';
import { storiesOf } from '@storybook/react';

import PresentArticles from './PresentArticles';
import { conceptList, dictEntryList } from 'utils.data';

const arpeggio = [
  {
    'category': 'Beaivválaš giella',
    'dict': 'termwiki',
    'from': {
      'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
      'explanation': null,
      'language': 'fin',
      'terms': [
        {
          'expression': {
            'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwYw==',
            'language': 'fin',
            'lemma': 'arpeggio',
            'pos': 'N'
          },
          'note': '(murtosointu)',
          'sanctioned': true,
          'source': null,
          'status': null
        }
      ]
    },
    'termwikiref': 'Beaivválaš giella:Musikksannõs 12',
    'to': {
      'definition': null,
      'explanation': null,
      'language': 'sms',
      'terms': [
        {
          'expression': {
            'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwZA==',
            'language': 'sms',
            'lemma': 'arpeggio',
            'pos': 'N'
          },
          'note': '(=, -ooʹje ~ =, arpeggiost)',
          'sanctioned': true,
          'source': null,
          'status': null
        }
      ]
    }
  },
  {
    'category': 'Beaivválaš giella',
    'dict': 'termwiki',
    'from': {
      'definition': null,
      'explanation': null,
      'language': 'sms',
      'terms': [
        {
          'expression': {
            'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwZA==',
            'language': 'sms',
            'lemma': 'arpeggio',
            'pos': 'N'
          },
          'note': '(=, -ooʹje ~ =, arpeggiost)',
          'sanctioned': true,
          'source': null,
          'status': null
        }
      ]
    },
    'termwikiref': 'Beaivválaš giella:Musikksannõs 12',
    'to': {
      'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
      'explanation': null,
      'language': 'fin',
      'terms': [
        {
          'expression': {
            'id': 'TGVtbWFUeXBlOjVlZDk1NjZjN2JkZmY0ODc0YzViNjAwYw==',
            'language': 'fin',
            'lemma': 'arpeggio',
            'pos': 'N'
          },
          'note': '(murtosointu)',
          'sanctioned': true,
          'source': null,
          'status': null
        }
      ]
    }
  }
];

storiesOf('PresentArticles', module)
  // .add('DictArticle with examples', () => <PresentArticles
  //   articles={[resultDictWithExamples[0]]} />)
  // .add('DictArticle without examples', () => <PresentArticles
  //   articles={[resultDictWithoutExamples[0]]} />)
  // .add('TermWikiArticle arpeggio', () => <PresentArticles
// articles={arpeggio} />)
  .add('vuorka dicts and terms', () => <PresentArticles
    lemma='vuorká'
    data={{conceptList, dictEntryList}} />);
// .add('All types', () => <PresentArticles
//   articles={[
//     resultDictWithExamples[0],
//     resultDictWithoutExamples[0],
//     termGroup
//   ]} />);
