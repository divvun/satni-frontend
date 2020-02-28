import React from 'react';
import { storiesOf } from '@storybook/react';

import Examples from './Examples';

const examples = [
  { x: 'original0', xt: 'translation0', key: 0 },
  { x: 'original1', xt: 'translation1', key: 0 }
];

storiesOf('Examples', module)
  .add('default', () => <Examples examples={examples} />);
