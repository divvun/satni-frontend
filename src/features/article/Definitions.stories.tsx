import type { Meta, StoryFn } from '@storybook/react';
import Definitions from './Definitions';

const termGroup = {
  termwikiref: 'Luonddudieđa ja matematihkka:x33543',
  category: 'Luonddudieđa ja matematihkka',
  dict: 'termwiki',
  from: {
    definition: 'vätska',
    language: 'swe',
    terms: [
      {
        id: '52476',
        language: 'swe',
        lemma: 'lim',
        pos: '',
      },
    ],
  },
  to: {
    definition:
      'doahppi / njoahtti njalbi dahje suohkkadit ávnnas mainna čatná oktii muorrabihtáid, metállabihtáid jna',
    language: 'sme',
    terms: [
      {
        id: '52479',
        language: 'sme',
        lemma: 'liima',
        pos: 'N',
      },
      {
        id: '52477',
        language: 'sme',
        lemma: 'liibma',
        pos: 'N',
      },
    ],
  },
};

export default {
  title: 'Definitions',
} as Meta<typeof Definitions>;

export const Default: StoryFn<typeof Definitions> = () => (
  <Definitions definitions={termGroup.from.definition} language="swe" />
);

Default.storyName = 'default';
