import React from 'react';
import { storiesOf } from '@storybook/react';

import Source from './Source';

const source = 'smenob';

storiesOf('Source', module)
  .add('default', () => <Source source={source} />);
