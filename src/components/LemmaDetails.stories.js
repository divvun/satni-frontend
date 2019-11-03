import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LemmaDetails from './LemmaDetails';

const lemmaInfo = {
  lemma: 'juolgi',
  pos: 'N',
  language: 'sme'
};

storiesOf('LemmaDetails', module)
  .add('valid korp language', () => <LemmaDetails lemma='juolgi' pos='N' language='sme' />)
  .add('invalid korp language', () => <LemmaDetails lemma='juolgi' pos='N' language='eng' />);
