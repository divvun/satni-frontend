import React from 'react';
import { useQuery } from '@apollo/client';
import { Trans } from '@lingui/macro';
import Radio from '@material-ui/core/Radio';

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
        <Radio
          checked={searchMode === 'start'}
          onChange={handleChange}
          value="start"
          inputProps={{ 'aria-label': 'Start' }}
        />
        <Radio
          checked={searchMode === 'middle'}
          onChange={handleChange}
          value="middle"
          inputProps={{ 'aria-label': 'Middle' }}
        />
        <Radio
          checked={searchMode === 'end'}
          onChange={handleChange}
          value="end"
          inputProps={{ 'aria-label': 'End' }}
        />
      </>
    </>
  );
};

export default WildCard;
