import type { Meta, StoryFn } from '@storybook/react';
import Source from './Source';

export default {
  title: 'Source',
} as Meta<typeof Source>;

export const Default: StoryFn<typeof Source> = () => (
  <Source source="some source" lemma="lemma" />
);

Default.storyName = 'default';
