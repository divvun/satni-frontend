import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { I18n } from '@lingui/react';
import { t } from '@lingui/macro';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import SearchIcon from '@material-ui/icons/Search';

import SamiKeys from './SamiKeys';

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

const InputWithTranslation = (props) => {
  const classes = useStyles();
  const {value, onChange} = props;

  return (
    <I18n>
      {({i18n}) => (
        <InputBase
          autoFocus
          value={value}
          onChange={(onChange)}
          placeholder={i18n._(t`Write at least one letter here`)}
          className={classes.input}
          inputProps={{ 'aria-label': 'search' }}
        />
      )}
    </I18n>
  );
};

const FilterBar = ({searchHandler}) => {
  const classes = useStyles();

  const [value, setValue] = useState('');
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
    searchHandler(newValue);
  };

  const handleKeyInput = input => {
    const newValue = `${value}${input}`;
    setValue(newValue);
    searchHandler(newValue);
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
    <Paper component='form' className={classes.root}>
      <IconButton
        className={classes.iconButton}
        aria-label='sámi keys'
        aria-describedby={id}
        onClick={handleClick}
      >
        <KeyboardIcon />
      </IconButton>
      <InputWithTranslation
        value={value}
        onChange={(handleChange)}
      />
      <div className={classes.iconButton} aria-label='search'>
        <SearchIcon />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <SamiKeys keyHandler={handleKeyInput} />
      </Popover>
    </Paper>
  );
};

export default FilterBar;
