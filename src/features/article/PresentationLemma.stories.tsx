import type { Meta, StoryFn } from '@storybook/react';
import PresentationLemma from './PresentationLemma';

export default {
  title: 'PresentationLemma',
} as Meta<typeof PresentationLemma>;

export const Without: StoryFn<typeof PresentationLemma> = () => (
  <PresentationLemma presentationLemma="kanskje" />
);

Without.storyName = 'without @';

export const WithOne: StoryFn<typeof PresentationLemma> = () => (
  <PresentationLemma presentationLemma="kan@skje" />
);

WithOne.storyName = 'with one @';

export const WithTwo: StoryFn<typeof PresentationLemma> = () => (
  <PresentationLemma presentationLemma="ka@nsk@je" />
);

WithTwo.storyName = 'with two @';
