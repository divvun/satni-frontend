import type { Meta, StoryFn } from '@storybook/react-vite';
import SamiKeys from './SamiKeys';

export default {
  title: 'SamiKeys',
} as Meta<typeof SamiKeys>;

export const Default: StoryFn<typeof SamiKeys> = () => (
  <SamiKeys keyHandler={() => {}} />
);

Default.storyName = 'default';
