import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const WildCard = () => {
  const [value, setValue] = React.useState('start');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        row
        aria-label="searchFrom"
        name="searchFrom1"
        value={value}
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
