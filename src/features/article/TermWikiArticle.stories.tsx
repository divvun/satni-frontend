import type { Meta, StoryFn } from '@storybook/react-vite';
import {
  multilingualconceptListsByNames,
  orderedMultilingualConcept,
} from '../../utils';
import { conceptList } from '../../utils.data';
import TermWikiArticle from './TermWikiArticle';

const lemma = 'vuorká';
const termsByNames = multilingualconceptListsByNames(conceptList as any);

export default {
  title: 'TermWikiArticle',
} as Meta<typeof TermWikiArticle>;

export const Default: StoryFn<typeof TermWikiArticle> = () => (
  <TermWikiArticle
    category="Servodatdieđa"
    multiLingualConcept={orderedMultilingualConcept(
      lemma,
      termsByNames['Servodatdieđa:vurkkohat'],
    )}
    lemma={lemma}
  />
);

Default.storyName = 'default';
