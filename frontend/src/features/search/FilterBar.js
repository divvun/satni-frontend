import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

const FilterBar = ({searchHandler}) => (
  <TextField onChange={searchHandler}/>
)

export default FilterBar
