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
};

export const NoLink = () => <LemmaGroup lemma="vuorká" term={term} />;

NoLink.story = {
  name: 'no link',
};

export const WithLink = () => <LemmaGroup lemma="aka" term={term} />;

WithLink.story = {
  name: 'with link',
};
