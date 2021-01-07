import React from 'react';
import { storiesOf } from '@storybook/react';

import Stem from './Stem';

const stem = { id: '68360', lemma: 'bárdni', language: 'sme', pos: 'N' };
const restriction = {
  restriction: 'om julenissen',
  attributes: {}
};
storiesOf('Stem', module)
  .add('withLink true', () => <Stem
    stem={stem}
    restriction={restriction}
    withLink />)
  .add('withLink false', () => <Stem
    stem={stem}
    restriction={restriction} />);
