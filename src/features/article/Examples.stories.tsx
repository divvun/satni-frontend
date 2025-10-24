import type { Meta, StoryFn } from '@storybook/react';
import Examples from './Examples';

const examples = [
  { example: 'original0', translation: 'translation0', key: 0 },
  { example: 'original1', translation: 'translation1', key: 0 },
];

export default {
  title: 'Examples',
} as Meta<typeof Examples>;

export const Default: StoryFn<typeof Examples> = () => (
  <Examples examples={examples} sourceLanguage="sme" targetLanguage="nob" />
);

Default.storyName = 'default';
