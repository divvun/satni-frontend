import React from 'react';
import { storiesOf } from '@storybook/react';

import PresentationLemma from './PresentationLemma';


storiesOf('PresentationLemma')
  .add('without @', () => <PresentationLemma
    presentationLemma='kanskje'
  />).
  add('with one @', () => <PresentationLemma
    presentationLemma='kan@skje'
  />)
  .add('with two @', () => <PresentationLemma
    presentationLemma='ka@nsk@je'
  />);
