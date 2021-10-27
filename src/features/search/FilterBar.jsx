import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import MoreVert from '@material-ui/icons/MoreVert';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

import { locationParser } from '../../utils';
import SamiKeys from './SamiKeys';
import InputWithTranslation from './InputWithTranslation';
import WildCard from './WildCard';

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
    color: theme.palette.common.black,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: fade(theme.palette.common.black, 0.15),
  },
  iconButton: {
    color: 'inherit',
    padding: theme.spacing(1),
  },
  samiKeys: {
    maxWidth: '600px',
  },
  searchMode: {
    margin: theme.spacing(1),
    width: '100%',
  },
}));

const FilterBar = ({ searchExpression, setSearchExpression }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const currentPath = locationParser(location.pathname);

  const handleChange = (event) => {
    setSearchExpression(event.target.value);
  };

  const handleKeyInput = (input) => {
    setSearchExpression(`${searchExpression}${input}`);
  };

  const lookup = () => {
    const path = currentPath.currentDict
      ? `/${currentPath.currentDict}/${searchExpression}`
      : `/${searchExpression}`;
    history.push(path);
  };

  const keyPress = (event) => {
    if (event.key === 'Enter') {
      lookup();
    }
  };

  const [samiKeyAnchor, setSamiKeyAnchor] = React.useState(null);

  const handleOpenSamiKey = (event) => {
    setSamiKeyAnchor(event.currentTarget);
  };

  const handleCloseSamiKey = () => {
    setSamiKeyAnchor(null);
  };

  const samiKeyOpen = Boolean(samiKeyAnchor);
  const idSamiKey = samiKeyOpen ? 'sami-keys' : undefined;

  const [searchModeAnchor, setSearchModeAnchor] = React.useState(null);

  const handleOpenSearchMode = (event) => {
    setSearchModeAnchor(event.currentTarget);
  };

  const handleCloseSearchMode = () => {
    setSearchModeAnchor(null);
  };

  const searchModeOpen = Boolean(searchModeAnchor);
  const idSearchMode = searchModeOpen ? 'search-mode' : undefined;

  return (
    <Paper component="div" className={classes.root}>
      <Tooltip
        title={<Trans>Sámi letters</Trans>}
        aria-label={<Trans>Sámi letters</Trans>}
      >
        <IconButton
          className={classes.iconButton}
          aria-label={<Trans>sámi keys</Trans>}
          aria-describedby={idSamiKey}
          onClick={handleOpenSamiKey}
        >
          <KeyboardIcon />
        </IconButton>
      </Tooltip>
      <InputWithTranslation
        value={searchExpression}
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
      <Hidden smUp>
        <Tooltip
          title={
            <Trans>
              Choose whether the search expression is in the start, middle or
              the end of words.
            </Trans>
          }
          aria-label={<Trans>Search mode</Trans>}
        >
          <IconButton
            className={classes.iconButton}
            aria-label={<Trans>Search mode</Trans>}
            onClick={handleOpenSearchMode}
          >
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Hidden>
      <Hidden xsDown>
        <WildCard />
      </Hidden>
      <Popover
        className={classes.samiKeys}
        id={idSamiKey}
        open={samiKeyOpen}
        anchorEl={samiKeyAnchor}
        onClose={handleCloseSamiKey}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <SamiKeys keyHandler={handleKeyInput} />
      </Popover>
      <Popover
        className={classes.searchMode}
        id={idSearchMode}
        open={searchModeOpen}
        anchorEl={searchModeAnchor}
        onClose={handleCloseSearchMode}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <WildCard />
      </Popover>
    </Paper>
  );
};

FilterBar.propTypes = {
  searchExpression: PropTypes.string.isRequired,
  setSearchExpression: PropTypes.func.isRequired,
};

export default FilterBar;
