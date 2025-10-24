import type { Meta, StoryFn } from '@storybook/react-vite';
import WildCard from './WildCard';

export default {
  title: 'WildCard',
} as Meta<typeof WildCard>;

export const Default: StoryFn<typeof WildCard> = () => <WildCard />;

Default.storyName = 'default';
