import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import { alpha, Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import MoreVert from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
// @ts-ignore - React Router DOM v5 compatibility
import { useHistory, useLocation } from 'react-router-dom';

import { locationParser } from '../../utils';
import InputWithTranslation from './InputWithTranslation';
import SamiKeys from './SamiKeys';
import WildCard from './WildCard';

interface FilterBarProps {
  searchExpression: string;
  setSearchExpression: (expression: string) => void;
}

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: theme.spacing(2),
    color: theme.palette.common.black,
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
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

const FilterBar: React.FC<FilterBarProps> = ({
  searchExpression,
  setSearchExpression,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const currentPath = locationParser(location.pathname);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchExpression(event.target.value);
  };

  const handleKeyInput = (input: string) => {
    setSearchExpression(`${searchExpression}${input}`);
  };

  const lookup = () => {
    const path = currentPath.currentDict
      ? `/${currentPath.currentDict}/${searchExpression}`
      : `/${searchExpression}`;
    history.push(path);
  };

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      lookup();
    }
  };

  const [samiKeyAnchor, setSamiKeyAnchor] = React.useState<HTMLElement | null>(
    null,
  );

  const handleOpenSamiKey = (event: React.MouseEvent<HTMLElement>) => {
    setSamiKeyAnchor(event.currentTarget);
  };

  const handleCloseSamiKey = () => {
    setSamiKeyAnchor(null);
  };

  const samiKeyOpen = Boolean(samiKeyAnchor);
  const idSamiKey = samiKeyOpen ? 'sami-keys' : undefined;

  const [
    searchModeAnchor,
    setSearchModeAnchor,
  ] = React.useState<HTMLElement | null>(null);

  const handleOpenSearchMode = (event: React.MouseEvent<HTMLElement>) => {
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
      >
        <IconButton
          className={classes.iconButton}
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
      >
        <IconButton
          className={classes.iconButton}
          onClick={lookup}
        >
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
        <Tooltip
          title={
            <Trans>
              Choose whether the search expression is in the start, middle or
              the end of words.
            </Trans>
          }
        >
          <IconButton
            className={classes.iconButton}
            aria-label="Search mode"
            onClick={handleOpenSearchMode}
          >
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <WildCard />
      </Box>
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

export default FilterBar;
