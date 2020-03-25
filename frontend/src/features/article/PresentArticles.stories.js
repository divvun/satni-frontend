import React from 'react';
import { storiesOf } from '@storybook/react';

import PresentArticles from './PresentArticles';

const articles = [
  {
    'category': 'Beaivválaš giella',
    'dict': 'termwiki',
    'from': {
      'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
      'explanation': null,
      'id': '61',
      'termSet': [
        {
          'id': '63',
          'language': 'fin',
          'lemma': 'arpeggio',
          'pos': 'N',
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
      'id': '62',
      'termSet': [
        {
          'id': '64',
          'language': 'sms',
          'lemma': 'arpeggio',
          'pos': 'N',
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
      'definition': 'sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)',
      'explanation': null,
      'id': '61',
      'termSet': [
        {
          'id': '63',
          'language': 'fin',
          'lemma': 'arpeggio',
          'pos': 'N',
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
      'id': '62',
      'termSet': [
        {
          'id': '64',
          'language': 'sms',
          'lemma': 'arpeggio',
          'pos': 'N',
          'note': '(=, -ooʹje ~ =, arpeggiost)',
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
  .add('Only TermWikiArticle', () => <PresentArticles
    articles={articles} />);
  // .add('All types', () => <PresentArticles
  //   articles={[
  //     resultDictWithExamples[0],
  //     resultDictWithoutExamples[0],
  //     termGroup
  //   ]} />);
