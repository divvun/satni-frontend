import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import NounParadigm from './NounParadigm';
import {
  resultSmaNounParadigm,
  resultSmeNounParadigm,
  resultSmjNounParadigm,
  resultSmnNounParadigm
} from '../utils_testdata';

storiesOf('NounParadigm', module)
  .add('South saami noun', () => <NounParadigm paradigm={resultSmaNounParadigm} />)
  .add('North saami noun', () => <NounParadigm paradigm={resultSmeNounParadigm} />)
  .add('Lule saami noun', () => <NounParadigm paradigm={resultSmjNounParadigm} />)
  .add('Inari saami noun', () => <NounParadigm paradigm={resultSmnNounParadigm} />);
