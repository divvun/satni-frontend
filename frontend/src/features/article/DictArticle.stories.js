import React from 'react';
import { storiesOf } from '@storybook/react';

import DictArticle from './DictArticle';

const dictGroup = {
  examples: [
    {
      x: 'original0 original0 original0 original0',
      xt: 'translation0 translation0 translation0 translation0'
    },
    {
      x: 'original1',
      xt: 'translation1'
    }
  ],
  stems: [
    {
      lemma: 'váldit',
      pos: 'Verb',
      language: 'sme'
    },
    {
      lemma: 'ta',
      pos: 'Verb',
      language: 'nob'
    }
  ],
  dict: 'smenob'
};

storiesOf('DictArticle', module)
  .add('default', () => <DictArticle dictGroup={dictGroup} />);
