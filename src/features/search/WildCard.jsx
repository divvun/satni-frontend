import React from 'react';
import { useQuery } from '@apollo/client';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
      <>
        <ButtonGroup>
          <ToggleButton
            type="radio"
            variant="outline-secondary"
            name="radio"
            checked={searchMode === 'start'}
            onChange={handleChange}
            value="start"
            inputProps={{ 'aria-label': 'Start' }}
          >
            <span className="radio_text">Start</span>
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant="outline-secondary"
            name="radio"
            checked={searchMode === 'middle'}
            onChange={handleChange}
            value="middle"
            inputProps={{ 'aria-label': 'Middle' }}
          >
            <span className="radio_text">Middle</span>
          </ToggleButton>
          <ToggleButton
            type="radio"
            variant="outline-secondary"
            name="radio"
            checked={searchMode === 'end'}
            onChange={handleChange}
            value="end"
            inputProps={{ 'aria-label': 'End' }}
          >
            <span className="radio_text">End</span>
          </ToggleButton>
        </ButtonGroup>
      </>
    </>
  );
};

export default WildCard;
