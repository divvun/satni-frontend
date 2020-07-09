import React from 'react';
import { storiesOf } from '@storybook/react';

import DictArticle from './DictArticle';

const dictGroup = {
  'dict': 'nobsme',
  'from': {
    'language': 'nob',
    'lookupLemmas': [
      {
        'lemma': 'kanskje',
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
        'restriction': 'om julenissen',
        'translations': [
          {
            'language': 'sme',
            'lemma': 'soaitit',
            'pos': 'V'
          },
          {
            'language': 'sme',
            'lemma': 'várra',
            'pos': 'Adv'
          }
        ]
      }
    ]
  }
};

storiesOf('DictArticle', module)
  .add('default', () => <DictArticle dictGroup={dictGroup} />);
