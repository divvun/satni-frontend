import React from 'react';
import { storiesOf } from '@storybook/react';

import TermWikiArticle from './TermWikiArticle';

const termGroup = {
  stems: [
    {
      lemma: 'androgyn',
      language: 'smn',
      pos: 'A'
    },
    {
      lemma: 'androgyne',
      language: 'eng',
      pos: 'A'
    }
  ],
  termwikiref: 'Luonddudieđa ja matematihkka:androgyn'.split(' ').join('_'),
  category: 'Luonddudieđa ja matematihkka'.split(' ').join('_'),
  dict: 'termwiki'
};

storiesOf('TermWikiArticle', module)
  .add('default', () => <TermWikiArticle
    termGroup={termGroup} />);
