import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TermWikiArticle from './TermWikiArticle';

const stems = [
  {
    lemma: 'androgyn',
    lang: 'smn',
    pos: 'A'
  },
  {
    lemma: 'androgyne',
    lang: 'eng',
    pos: 'A'
  },
  {
    lemma: 'androgynlâšvuotâ',
    lang: 'smn',
    pos: 'A'
  },
  {
    lemma: 'androgynvuotâ',
    lang: 'smn',
    pos: 'A'
  },
  {
    lemma: 'androgyna',
    lang: 'sme',
    pos: 'A'
  },
  {
    lemma: 'androgyyni',
    lang: 'fin',
    pos: 'A'
  }
];

storiesOf('TermWikiArticle', module)
  .add('default', () => <TermWikiArticle
    stems={stems}
    termwikiref='Luonddudieđa ja matematihkka:androgyn'
    dictionary='termwiki' />);
