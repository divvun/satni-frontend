import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import VerbParadigm from './VerbParadigm';

const resultSmeVerbParadigm = {};

storiesOf('VerbParadigm', module)
  .add('North saami verbs', () => <VerbParadigm paradigm={resultSmeVerbParadigm} />);
