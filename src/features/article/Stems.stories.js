import React from 'react';
import { storiesOf } from '@storybook/react';

import Stems from './Stems';

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};
const stems = [
  stem,
  {...stem, key: 1},
  {...stem, lang: 'nob'}
];

storiesOf('Stems', module)
  .add('default', () => <Stems stems={stems} />);
