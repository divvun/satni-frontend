import Example from './Example';

const example = { example: 'original', translation: 'translation' };

export default {
  title: 'Example',
};

export const Default = () => <Example example={example} />;

Default.story = {
  name: 'default',
};
