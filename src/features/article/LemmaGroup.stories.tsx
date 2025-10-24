import type { Meta, StoryFn } from '@storybook/react-vite';
import LemmaGroup from './LemmaGroup';

const term = {
  expression: {
    language: 'sme',
    lemma: 'vuorká',
    presentationLemma: 'vuorká',
    pos: 'N',
  },
  note: 'vuorkánote',
  sanctioned: true,
  source: 'vuorkásource',
  status: 'vuorkástatus',
};

export default {
  title: 'LemmaGroup',
} as Meta<typeof LemmaGroup>;

export const NoLink: StoryFn<typeof LemmaGroup> = () => (
  <LemmaGroup lemma="vuorká" term={term} />
);

NoLink.storyName = 'no link';

export const WithLink: StoryFn<typeof LemmaGroup> = () => (
  <LemmaGroup lemma="aka" term={term} />
);

WithLink.storyName = 'with link';
