import React from 'react';
import { storiesOf } from '@storybook/react';

import Stem from './Stem';

const stem = { id: '68360', lemma: 'bárdni', language: 'sme', pos: 'N' };

storiesOf('Stem', module)
  .add('default', () => <Stem stem={stem} />);
