import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AdjParadigm from './AdjParadigm';
import {
  resultSmeAdjParadigm,
  resultSmjAdjParadigm
} from '../utils_testdata';

storiesOf('AdjParadigm', module)
  .add('North saami adjective', () => <AdjParadigm paradigm={resultSmeAdjParadigm} />)
  .add('Lule saami adjective', () => <AdjParadigm paradigm={resultSmjAdjParadigm} />);
