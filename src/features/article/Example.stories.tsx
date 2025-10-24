import type { Meta, StoryFn } from '@storybook/react-vite';
import Example from './Example';

const example = { example: 'original', translation: 'translation' };

export default {
  title: 'Example',
} as Meta<typeof Example>;

export const Default: StoryFn<typeof Example> = () => (
  <Example example={example} sourceLanguage="sme" targetLanguage="nob" />
);

Default.storyName = 'default';
