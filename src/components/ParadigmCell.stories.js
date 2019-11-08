import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ParadigmCell from './ParadigmCell';

const paradigm = {
  'analyses': {
    'N+Sg+Nom': [
      'guolli'
    ],
    'N+Sg+Gen': [
      'guole',
      'guoli'
    ],
    'N+Sg+Acc': [
      'guoli'
    ],
    'N+Sg+Ill': [
      'guollái'
    ],
    'N+Sg+Loc': [
      'guolis'
    ],
    'N+Sg+Com': [
      'guliin'
    ],
    'N+Pl+Nom': [
      'guolit'
    ],
    'N+Pl+Gen': [
      'guliid'
    ],
    'N+Pl+Acc': [
      'guliid'
    ],
    'N+Pl+Ill': [
      'guliide'
    ],
    'N+Pl+Loc': [
      'guliin'
    ],
    'N+Pl+Com': [
      'guliiguin'
    ],
    'N+Ess': [
      'guollin'
    ]
  }
};

storiesOf('ParadigmCell', module)
  .add('default', () => <ParadigmCell key='1' values={paradigm['analyses']['N+Sg+Gen']} />);
