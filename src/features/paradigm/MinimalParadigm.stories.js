import React from 'react';
import { storiesOf } from '@storybook/react';

import MinimalParadigm from './MinimalParadigm';

export const paradigmData = {
  'V+Inf': [
    'váldit'
  ],
  'V+Ind+Prs+Sg1': [
    'válddán'
  ],
  'V+Ind+Prs+Sg2': [
    'válddát'
  ],
  'V+Ind+Prs+Sg3': [
    'váldá'
  ],
  'V+Ind+Prs+Du1': [
    'válde'
  ]
};

storiesOf('MinimalParadigm', module)
  .add('default', () => <MinimalParadigm paradigm={paradigmData} />);
