import React from 'react';

import apolloClient from 'apolloClient';
import satniStore from 'configureStore';
import ProviderWrapper from 'containers/ProviderWrapper';

const StoryWrapper = (story) => (
  <ProviderWrapper store={satniStore} client={apolloClient}>
    {story()}
  </ProviderWrapper>
);

export default StoryWrapper;
