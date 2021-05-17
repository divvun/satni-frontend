import React from 'react';
import { useQuery } from '@apollo/client';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import GET_SEARCH_MODE from '../../operations/queries/getSearchMode';
import setSearchMode from '../../operations/mutations/setSearchMode';

const WildCard = () => {
  const searchModeQueryResult = useQuery(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data;

  const handleChange = (event) => {
    setSearchMode(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="searchFrom"
        name="searchFrom1"
        value={searchMode}
        onChange={handleChange}
      >
        <FormControlLabel value="start" control={<Radio />} label="Start" />
        <FormControlLabel value="middle" control={<Radio />} label="Middle" />
        <FormControlLabel value="end" control={<Radio />} label="End" />
      </RadioGroup>
    </FormControl>
  );
};

export default WildCard;
