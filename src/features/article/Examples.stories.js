import React from 'react';
import { storiesOf } from '@storybook/react';

import Examples from './Examples';

const examples = [
  { example: 'original0', translation: 'translation0', key: 0 },
  { example: 'original1', translation: 'translation1', key: 0 }
];

storiesOf('Examples', module)
  .add('default', () => <Examples examples={examples} />);
