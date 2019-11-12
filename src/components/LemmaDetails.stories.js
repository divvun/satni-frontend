import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LemmaDetails from './LemmaDetails';

const valid_korp_language = { search: '?lemma=juolgi&pos=N&lang=sme'};
const invalid_korp_language = { search: '?lemma=juolgi&pos=N&lang=eng'};

storiesOf('LemmaDetails', module)
  .add('valid korp language', () => <LemmaDetails location={valid_korp_language} />)
  .add('invalid korp language', () => <LemmaDetails location={invalid_korp_language} />);
