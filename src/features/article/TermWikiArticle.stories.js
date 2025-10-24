import {
  multilingualconceptListsByNames,
  orderedMultilingualConcept,
} from 'utils';
import { conceptList } from 'utils.data';
import TermWikiArticle from './TermWikiArticle';

const lemma = 'vuorká';
const termsByNames = multilingualconceptListsByNames(conceptList);

export default {
  title: 'TermWikiArticle',
};

export const Default = () => (
  <TermWikiArticle
    category="Servodatdieđa"
    multiLingualConcept={orderedMultilingualConcept(
      lemma,
      termsByNames['Servodatdieđa:vurkkohat'],
    )}
    lemma={lemma}
  />
);

Default.story = {
  name: 'default',
};
