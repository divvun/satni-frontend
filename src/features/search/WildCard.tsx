import React from 'react';
import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Radio from '@material-ui/core/Radio';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Tooltip from '@material-ui/core/Tooltip';
import setSearchMode from '../../operations/mutations/setSearchMode';
import GET_SEARCH_MODE from '../../operations/queries/getSearchMode';

interface SearchModeQueryData {
  searchMode: string;
}

const WildCard: React.FC = () => {
  const searchModeQueryResult = useQuery<SearchModeQueryData>(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data || { searchMode: 'start' };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchMode(event.target.value);
  };

  return (
    <>
      <Trans>Search mode:</Trans>

      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Tooltip
        title={<Trans>Search words that start with your search term</Trans>}
        aria-label={<Trans>Search mode</Trans>}
      >
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Radio
          checked={searchMode === 'start'}
          onChange={handleChange}
          value="start"
          inputProps={{ 'aria-label': 'Start' }}
        />
      </Tooltip>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Tooltip
        title={<Trans>Search words that contain your search term</Trans>}
        aria-label={<Trans>Search mode</Trans>}
      >
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Radio
          checked={searchMode === 'middle'}
          onChange={handleChange}
          value="middle"
          inputProps={{ 'aria-label': 'Middle' }}
        />
      </Tooltip>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Tooltip
        title={<Trans>Search words that end in your search term</Trans>}
        aria-label={<Trans>Search mode</Trans>}
      >
        {/* @ts-ignore - Material-UI v4 compatibility */}
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