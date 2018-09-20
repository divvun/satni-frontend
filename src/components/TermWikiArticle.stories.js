import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TermWikiArticle from './TermWikiArticle';

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};
const stems = [
  stem,
  {...stem, key: 1},
  {...stem, lang: 'nob'}
];

storiesOf('TermWikiArticle', module)
  .add('default', () => <TermWikiArticle
    stems={stems}
    termwikiref='Luonddudieđa ja matematihkka:guolli' />);
