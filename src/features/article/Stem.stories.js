import React from 'react';
import { storiesOf } from '@storybook/react';

import Stem from './Stem';

const stem = {
  lemma: 'bárdni',
  presentationLemma: 'bárdni',
  language: 'sme',
  pos: 'N',
  dialect: 'north',
  country: 'SE'
};

const restriction = {
  restriction: 'om julenissen',
  attributes: {}
};

storiesOf('Stem')
  .add('with space', () => <Stem
    stem={{...stem, lemma: 'bar dni'}}
    restriction={restriction} />)
  .add('withLink true', () => <Stem
    stem={stem}
    restriction={restriction}
    withLink />)
  .add('withLink false', () => <Stem
    stem={stem}
    restriction={restriction} />)
  .add('other presentation lemma', () => <Stem
    stem={{...stem, presentationLemma: 'burdni'}}
    restriction={restriction} />)
  .add('other presentation lemma, link', () => <Stem
    stem={{...stem, presentationLemma: 'burdni'}}
    restriction={restriction}
    withLink />)
  .add('with @ and link', () => <Stem
    stem={{...stem, presentationLemma: 'bur@dni'}}
    restriction={restriction}
    withLink />);
