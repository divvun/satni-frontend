import React from 'react';
import { storiesOf } from '@storybook/react';

import TermWikiArticle from './TermWikiArticle';

const termGroup = {
  lemmaGroups: [
    {
      stem: {
        lemma: 'androgyn',
        lang: 'smn',
        pos: 'A'
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
        lemma: 'androgyne',
        lang: 'eng',
        pos: 'A'
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
        ]
      }
    }
  ],
  termwikiref: 'Luonddudieđa ja matematihkka:androgyn',
  category: 'Luonddudieđa ja matematihkka',
  dict: 'termwiki'
};

storiesOf('TermWikiArticle', module)
  .add('default', () => <TermWikiArticle
    termGroup={termGroup} />);
