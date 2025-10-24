import type { Meta, StoryFn } from '@storybook/react-vite';
import DictArticle from './DictArticle';

const dictGroup = {
  dict: 'gtnobsme',
  from: {
    language: 'nob',
    lookupLemmas: [
      {
        lemma: 'kanskje',
        presentationLemma: 'kanskje',
        pos: 'Adv',
      },
    ],
  },
  to: {
    language: 'sme',
    translationGroups: [
      {
        examples: [
          {
            example: 'Vi får kanskje ikke engang representant til Sametinget.',
            translation: 'Eat soaitte oba oažžut ge áirasa Sámediggái.',
          },
          {
            example:
              'Mor stemmer kanskje ikke på Arbeiderpartiet ved årets valg.',
            translation:
              'Eadni ii dáidde jienastit Bargiidbellodaga dán jagi válggas.',
          },
        ],
        restriction: 'om julenissen',
        translations: [
          {
            language: 'sme',
            lemma: 'soaitit',
            presentationLemma: 'soaitit',
            pos: 'V',
          },
          {
            language: 'sme',
            lemma: 'várra',
            presentationLemma: 'várra',
            pos: 'Adv',
          },
        ],
      },
    ],
  },
};

export default {
  title: 'DictArticle',
} as Meta<typeof DictArticle>;

export const Default: StoryFn<typeof DictArticle> = () => (
  <DictArticle dictGroup={dictGroup} lemma="kanskje" />
);

Default.storyName = 'default';
