import Examples from './Examples';

const examples = [
  { example: 'original0', translation: 'translation0', key: 0 },
  { example: 'original1', translation: 'translation1', key: 0 },
];

export default {
  title: 'Examples',
};

export const Default = () => <Examples examples={examples} />;

Default.story = {
  name: 'default',
};
