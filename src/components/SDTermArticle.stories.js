import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SDTermArticle from './SDTermArticle';

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};
const stems = [
  stem,
  {...stem, key: 1},
  {...stem, lang: 'nob'}
];

storiesOf('SDTermArticle', module)
  .add('default', () => <SDTermArticle
    stems={stems}
    dictionary='SD-terms' />);
