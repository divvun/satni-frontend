import React from 'react';
import { useReactiveVar } from '@apollo/client';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
import Radio from '@mui/material/Radio';
import Tooltip from '@mui/material/Tooltip';
import { searchModeVar } from '../../apolloCache';
import setSearchMode from '../../operations/mutations/setSearchMode';

const WildCard: React.FC = () => {
  const searchMode = useReactiveVar(searchModeVar);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMode(event.target.value);
  };

  return (
    <>
      <Trans>Search mode:</Trans>

      <Tooltip
        title={<Trans>Search words that start with your search term</Trans>}
      >
        <Radio
          checked={searchMode === 'start'}
          onChange={handleChange}
          value="start"
          inputProps={{ 'aria-label': 'Start' }}
        />
      </Tooltip>
      <Tooltip
        title={<Trans>Search words that contain your search term</Trans>}
      >
        <Radio
          checked={searchMode === 'middle'}
          onChange={handleChange}
          value="middle"
          inputProps={{ 'aria-label': 'Middle' }}
        />
      </Tooltip>
      <Tooltip
        title={<Trans>Search words that end in your search term</Trans>}
      >
        <Radio
          checked={searchMode === 'end'}
          onChange={handleChange}
          value="end"
          inputProps={{ 'aria-label': 'End' }}
        />
      </Tooltip>
    </>
  );
};

export default WildCard;
