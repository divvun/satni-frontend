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
};

export const WithSpace = () => (
  <Stem stem={{ ...stem, lemma: 'bar dni' }} restriction={restriction} />
);

WithSpace.story = {
  name: 'with space',
};

export const WithLinkTrue = () => (
  <Stem stem={stem} restriction={restriction} withLink />
);

WithLinkTrue.story = {
  name: 'withLink true',
};

export const WithLinkFalse = () => (
  <Stem stem={stem} restriction={restriction} />
);

WithLinkFalse.story = {
  name: 'withLink false',
};

export const OtherPresentationLemma = () => (
  <Stem
    stem={{ ...stem, presentationLemma: 'burdni' }}
    restriction={restriction}
  />
);

OtherPresentationLemma.story = {
  name: 'other presentation lemma',
};

export const OtherPresentationLemmaLink = () => (
  <Stem
    stem={{ ...stem, presentationLemma: 'burdni' }}
    restriction={restriction}
    withLink
  />
);

OtherPresentationLemmaLink.story = {
  name: 'other presentation lemma, link',
};

export const WithAndLink = () => (
  <Stem
    stem={{ ...stem, presentationLemma: 'bur@dni' }}
    restriction={restriction}
    withLink
  />
);

WithAndLink.story = {
  name: 'with @ and link',
};
