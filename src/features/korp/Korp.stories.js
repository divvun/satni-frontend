import React from 'react';
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import satniStore from 'configureStore';
import Korp from './Korp';

const korpInfo = {
  lemma: 'juolgi',
  language: 'sme'
};

storiesOf('Korp', module)
  .add('invalid language', () => <Provider store={satniStore}><Korp language='eng' lemma='juolgi' /></Provider>)
  .add('invalid lemma', () => <Provider store={satniStore}><Korp language='sme' lemma='asdfghjlo' /></Provider>)
  .add('sma valid lemma', () => <Provider store={satniStore}><Korp language='sma' lemma='gïele' /></Provider>)
  .add('smj valid lemma', () => <Provider store={satniStore}><Korp language='smj' lemma='guolle' /></Provider>)
  .add('sms valid lemma', () => <Provider store={satniStore}><Korp language='sms' lemma='ja' /></Provider>)
  .add('smn valid lemma', () => <Provider store={satniStore}><Korp language='smn' lemma='ja' /></Provider>)
  .add('sme valid lemma', () => <Provider store={satniStore}><Korp language='sme' lemma='juolgi' /></Provider>);
