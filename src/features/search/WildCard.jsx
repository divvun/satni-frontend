import React from 'react';
import { useQuery } from '@apollo/client';
import { Trans } from '@lingui/macro';
import Radio from '@material-ui/core/Radio';
import Tooltip from '@material-ui/core/Tooltip';

import GET_SEARCH_MODE from '../../operations/queries/getSearchMode';
import setSearchMode from '../../operations/mutations/setSearchMode';

const WildCard = () => {
  const searchModeQueryResult = useQuery(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data;

  const handleChange = (event) => {
    setSearchMode(event.target.value);
  };

  return (
    <>
      <Trans>Search mode:</Trans>
      <>
        <Tooltip
          title={<Trans>Search words that start with your search term</Trans>}
          aria-label={<Trans>Search mode</Trans>}
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
          aria-label={<Trans>Search mode</Trans>}
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
          aria-label={<Trans>Search mode</Trans>}
        >
          <Radio
            checked={searchMode === 'end'}
            onChange={handleChange}
            value="end"
            inputProps={{ 'aria-label': 'End' }}
          />
        </Tooltip>
      </>
    </>
  );
};

export default WildCard;
