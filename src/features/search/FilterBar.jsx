import React from 'react';
import { useQuery } from '@apollo/client';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { useHistory, useLocation } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

import GET_SEARCH_EXPRESSION from '../../operations/queries/getSearchExpression';
import setSearchExpression from '../../operations/mutations/setSearchExpression';
import { locationParser } from '../../utils';
import SamiKeys from './SamiKeys';
import InputWithTranslation from './InputWithTranslation';
import WildCard from './WildCard';

export const useStyles = makeStyles((theme) => ({
  root: {
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
}));

const FilterBar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const currentPath = locationParser(location.pathname);
  const searchExpressionQuery = useQuery(GET_SEARCH_EXPRESSION);
  const { searchExpression } = searchExpressionQuery.data;

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
      <Tooltip
        title={
          <Trans>
            Choose whether the search expression is in the start, middle or the
            end of words.
          </Trans>
        }
        aria-label={<Trans>Search mode</Trans>}
      >
        <WildCard />
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
};

export default FilterBar;
