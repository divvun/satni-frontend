import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './Example';

const example = { example: 'original', translation: 'translation'};

storiesOf('Example', module)
  .add('default', () => <Example example={example} />);
