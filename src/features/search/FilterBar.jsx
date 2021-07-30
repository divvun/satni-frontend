import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Popover from '@material-ui/core/Popover';

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

  const handleCloseSamiKey = () => {
    setSamiKeyAnchor(null);
  };

  const samiKeyOpen = Boolean(samiKeyAnchor);
  const idSamiKey = samiKeyOpen ? 'sami-keys' : undefined;

  const [searchModeAnchor, setSearchModeAnchor] = React.useState(null);

  const handleCloseSearchMode = () => {
    setSearchModeAnchor(null);
  };

  const searchModeOpen = Boolean(searchModeAnchor);
  const idSearchMode = searchModeOpen ? 'search-mode' : undefined;

  return (
    <div className="search_bar">
      <InputWithTranslation
        value={searchExpression}
        onChange={handleChange}
        onKeyUp={keyPress}
      />

      <WildCard />

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
    </div>
  );
};

FilterBar.propTypes = {
  searchExpression: PropTypes.string.isRequired,
  setSearchExpression: PropTypes.func.isRequired,
};

export default FilterBar;
