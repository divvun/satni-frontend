import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { useHistory, useLocation } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

import { locationParser } from '../../utils';
import SamiKeys from './SamiKeys';
import InputWithTranslation from './InputWithTranslation';

export const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
  },
  iconButton: {
    color: 'inherit',
    padding: theme.spacing(1),
  },
}));

function FilterBar({ searchHandler }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const currentPath = locationParser(location.pathname);
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    searchHandler(newValue);
  };

  const handleKeyInput = (input) => {
    const newValue = `${value}${input}`;
    setValue(newValue);
    searchHandler(newValue);
  };

  const lookup = () => {
    const path = currentPath.currentDict
      ? `/${currentPath.currentDict}/${value}`
      : `/${value}`;
    history.push(path);
  };

  const keyPress = (event) => {
    if (event.key === 'Enter') {
      lookup();
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'sami-keys' : undefined;

  return (
    <Paper component="div" className={classes.root}>
      <Tooltip
        title={<Trans>Sámi letters</Trans>}
        aria-label={<Trans>Sámi letters</Trans>}
      >
        <IconButton
          className={classes.iconButton}
          aria-label={<Trans>sámi keys</Trans>}
          aria-describedby={id}
          onClick={handleClick}
        >
          <KeyboardIcon />
        </IconButton>
      </Tooltip>
      <InputWithTranslation
        value={value}
        onChange={handleChange}
        onKeyUp={keyPress}
      />
      <Tooltip
        title={<Trans>Lookup the search word</Trans>}
        aria-label={<Trans>Lookup the search word</Trans>}
      >
        <IconButton
          className={classes.iconButton}
          aria-label={<Trans>Search</Trans>}
          onClick={lookup}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <SamiKeys keyHandler={handleKeyInput} />
      </Popover>
    </Paper>
  );
}

FilterBar.propTypes = {
  searchHandler: PropTypes.func.isRequired,
};

export default FilterBar;
