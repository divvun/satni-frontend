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
  .add('invalid lemma', () => <Korp language='sme' lemma='asdfghjlo' />)
  .add('sma valid lemma', () => <Korp language='sma' lemma='gïele' />)
  .add('smj valid lemma', () => <Korp language='smj' lemma='guolle' />)
  .add('sms valid lemma', () => <Korp language='sms' lemma='ja' />)
  .add('smn valid lemma', () => <Korp language='smn' lemma='ja' />)
  .add('sme valid lemma', () => <Korp language='sme' lemma='juolgi' />);
