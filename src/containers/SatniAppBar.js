import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import FilterBar from 'features/search/FilterBar';

const SatniAppBar = (props) => {
  const { handleSearch, handleDrawerToggle, drawerWidth } = props;
  const useStyles = makeStyles(theme => ({
    appBar: {
      position: 'relative',
      flexDirection: 'column',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    }
  }));
  const classes = useStyles();

  return (
    <AppBar position='static' className={classes.appBar}>
      <Toolbar>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' noWrap>
          sátni.org
        </Typography>
        <FilterBar searchHandler={handleSearch} />
      </Toolbar>
    </AppBar>
  );
};

export default SatniAppBar;
