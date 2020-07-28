import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MenuIcon from '@material-ui/icons/Menu';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    }
  },
  input: {
    color: 'inherit',
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    color: 'inherit',
    padding: theme.spacing(1)
  }
}));

const FilterBar = ({searchHandler}) => {
  const classes = useStyles();

  return (
    <Paper component='form' className={classes.root}>
      <IconButton className={classes.iconButton} aria-label='sámi keys'>
        <KeyboardIcon />
      </IconButton>
      <InputBase
        autoFocus
        onChange={searchHandler}
        placeholder='Search…'
        className={classes.input}
        inputProps={{ 'aria-label': 'search' }}
      />
      <div className={classes.iconButton} aria-label='search'>
        <SearchIcon />
      </div>
    </Paper>
  );
};
export default FilterBar;
