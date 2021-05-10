import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import { interfaceLanguageVar } from 'apolloCache';

const MetaLanguageSelector = () => {
  const handleChange = (event) => {
    event.preventDefault();
    interfaceLanguageVar(event.target.value);
  };

  return (
    <FormControl variant="filled">
      <InputLabel id="page-language-label">Page language</InputLabel>
      <Select
        labelId="page-language-label"
        id="page-language"
        value={interfaceLanguageVar()}
        onChange={handleChange}
        label="Page language"
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="se">Davvisámegiella</MenuItem>
        <MenuItem value="smj">Julevsámegiella</MenuItem>
        <MenuItem value="sma">Åarjelsaemiengïele</MenuItem>
        <MenuItem value="fi">Suomen kieli</MenuItem>
        <MenuItem value="nb">Bokmål</MenuItem>
        <MenuItem value="nn">Nynorsk</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MetaLanguageSelector;
