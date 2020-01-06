import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Stem from './Stem';

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};

storiesOf('Stem', module)
  .add('default', () => <Stem stem={stem} />)
  .add('with_re', () => <Stem stem={{...stem, re: '(restring)'}} />)
  .add('key_nonzero', () => <Stem stem={{...stem, key: 1}} />)
  .add('lang_nonsme', () => <Stem stem={{...stem, lang: 'smj'}} />)
  .add('non_sami', () => <Stem stem={{...stem, lang: 'nob'}} />);
