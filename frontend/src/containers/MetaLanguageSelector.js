import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const MetaLanguageSelector = ({ language, onChangeLangage }) => {
  const handleChange = (event) => {
    event.preventDefault();
    onChangeLangage(event.target.value);
  };

  return (
    <FormControl variant='filled'>
      <InputLabel id='page-language-label'>Page language</InputLabel>
      <Select
        labelId='page-language-label'
        id='page-language'
        value={language}
        onChange={handleChange}
        label='Page language'
      >
        <MenuItem value='en'>English</MenuItem>
        <MenuItem value='se'>Davvisámegiella</MenuItem>
        <MenuItem value='smj'>Julevsámegiella</MenuItem>
        <MenuItem value='fi'>Suomen kieli</MenuItem>
        <MenuItem value='nb'>Bokmål</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MetaLanguageSelector;
