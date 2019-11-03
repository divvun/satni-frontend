import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Korp from './Korp';

const korpInfo = {
  lemma: 'juolgi',
  language: 'sme'
};

storiesOf('Korp', module)
  .add('invalid language', () => <Korp language='eng' lemma='juolgi' />)
  .add('sme valid lemma', () => <Korp language='sme' lemma='juolgi' />);
