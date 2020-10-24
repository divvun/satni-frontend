import React from 'react';
import { storiesOf } from '@storybook/react';

import DictArticle from './DictArticle';

const dictGroup = {
  'dict': 'gtnobsme',
  'from': {
    'language': 'nob',
    'lookupLemmas': [
      {
        'lemma': 'kanskje',
        'presentationLemma': 'kanskje',
        'pos': 'Adv'
      }
    ]
  },
  'to': {
    'language': 'sme',
    'translationGroups': [
      {
        'examples': [
          {
            'example': 'Vi får kanskje ikke engang representant til Sametinget.',
            'translation': 'Eat soaitte oba oažžut ge áirasa Sámediggái.'
          },
          {
            'example': 'Mor stemmer kanskje ikke på Arbeiderpartiet ved årets valg.',
            'translation': 'Eadni ii dáidde jienastit Bargiidbellodaga dán jagi válggas.'
          }
        ],
        'restriction': {
          restriction: 'om julenissen',
          attributes: {}
        },
        'translations': [
          {
            'language': 'sme',
            'lemma': 'soaitit',
            'presentationLemma': 'soaitit',
            'pos': 'V'
          },
          {
            'language': 'sme',
            'lemma': 'várra',
            'presentationLemma': 'várra',
            'pos': 'Adv'
          }
        ]
      }
    ]
  }
};

storiesOf('DictArticle', module)
  .add('default', () => <DictArticle
    dictGroup={dictGroup}
    lemma='kanskje'
  />);
