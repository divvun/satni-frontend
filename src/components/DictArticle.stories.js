import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DictArticle from './DictArticle';

const examples = [
  { x: 'original0', xt: 'translation0', key: 0 },
  { x: 'original1', xt: 'translation1', key: 0 }
];

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};
const stems = [
  stem,
  {...stem, key: 1},
  {...stem, lang: 'nob'}
];

storiesOf('DictArticle', module)
  .add('default', () => <DictArticle stems={stems} examples={examples} dictionary='smenob' />)
  .add('without_examples', () => <DictArticle stems={stems} examples={[]} dictionary='smenob' />);
