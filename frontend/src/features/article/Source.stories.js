import React from 'react';
import { storiesOf } from '@storybook/react';
import { Trans } from "@lingui/macro";

import Source from './Source';

const source = 'gtsmenob';

storiesOf('Source', module)
  .add('default', () => <Trans><Source source={source} /></Trans>);
