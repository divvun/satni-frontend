import { Trans } from '@lingui/macro';

import Source from './Source';

const source = 'gtsmenob';

export default {
  title: 'Source',
};

export const Default = () => (
  <Trans>
    <Source source={source} />
  </Trans>
);

Default.story = {
  name: 'default',
};
