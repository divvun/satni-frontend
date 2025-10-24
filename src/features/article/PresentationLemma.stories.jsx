import PresentationLemma from './PresentationLemma';

export default {
  title: 'PresentationLemma',
};

export const Without = () => <PresentationLemma presentationLemma="kanskje" />;

Without.story = {
  name: 'without @',
};

export const WithOne = () => <PresentationLemma presentationLemma="kan@skje" />;

WithOne.story = {
  name: 'with one @',
};

export const WithTwo = () => (
  <PresentationLemma presentationLemma="ka@nsk@je" />
);

WithTwo.story = {
  name: 'with two @',
};
