import type { Meta, StoryFn } from '@storybook/react';
import Stem from './Stem';

const stem = {
  lemma: 'bárdni',
  presentationLemma: 'bárdni',
  language: 'sme',
  pos: 'N',
  dialect: 'north',
  country: 'SE',
};

const restriction = {
  restriction: 'om julenissen',
  attributes: {},
};

export default {
  title: 'Stem',
} as Meta<typeof Stem>;

export const WithSpace: StoryFn<typeof Stem> = () => (
  <Stem stem={{ ...stem, lemma: 'bar dni' }} restriction={restriction} />
);

WithSpace.storyName = 'with space';

export const WithLinkTrue: StoryFn<typeof Stem> = () => (
  <Stem stem={stem} restriction={restriction} withLink />
);

WithLinkTrue.storyName = 'withLink true';

export const WithLinkFalse: StoryFn<typeof Stem> = () => (
  <Stem stem={stem} restriction={restriction} />
);

WithLinkFalse.storyName = 'withLink false';

export const OtherPresentationLemma: StoryFn<typeof Stem> = () => (
  <Stem
    stem={{ ...stem, presentationLemma: 'burdni' }}
    restriction={restriction}
  />
);

OtherPresentationLemma.storyName = 'other presentation lemma';

export const OtherPresentationLemmaLink: StoryFn<typeof Stem> = () => (
  <Stem
    stem={{ ...stem, presentationLemma: 'burdni' }}
    restriction={restriction}
    withLink
  />
);

OtherPresentationLemmaLink.storyName = 'other presentation lemma, link';

export const WithAndLink: StoryFn<typeof Stem> = () => (
  <Stem
    stem={{ ...stem, presentationLemma: 'bur@dni' }}
    restriction={restriction}
    withLink
  />
);

WithAndLink.storyName = 'with @ and link';
