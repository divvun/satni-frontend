import React from 'react';

import apolloClient from './apolloClient';
import ProviderWrapper from './containers/ProviderWrapper';

const StoryWrapper = (story: () => React.ReactNode): React.ReactElement => (
  <ProviderWrapper client={apolloClient}>{story()}</ProviderWrapper>
);

export default StoryWrapper;
