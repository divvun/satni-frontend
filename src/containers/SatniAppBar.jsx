import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';

import HelpDialog from './HelpDialog';

const SatniAppBar = ({
  setSearchExpression,
  handleDrawerToggle,
  drawerWidth,
}) => {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    title: {
      flexGrow: 1,
    },
    titleLink: {
      color: 'white',
    },
  }));
  const classes = useStyles();

  const [openHelpDialog, setOpenHelpDialog] = useState(false);
  const handleClickHelpDialog = () => {
    setOpenHelpDialog(true);
  };
  const handleCloseHelpDialog = () => {
    setOpenHelpDialog(false);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar variant="dense">
        <Typography variant="h6" noWrap className={classes.title}>
          <Link
            className={classes.titleLink}
            to="/"
            onClick={() => setSearchExpression('')}
          >
            sátni.org
          </Link>
        </Typography>
        <Hidden mdUp>
          <Tooltip
            title={<Trans>Settings</Trans>}
            aria-label={<Trans>Settings</Trans>}
          >
            <IconButton
              color="inherit"
              aria-label="Settings"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
        <Tooltip title={<Trans>Help</Trans>} aria-label={<Trans>Help</Trans>}>
          <IconButton
            color="inherit"
            aria-label="Settings"
            edge="start"
            onClick={handleClickHelpDialog}
            className={classes.helpButton}
          >
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <HelpDialog open={openHelpDialog} onClose={handleCloseHelpDialog} />
    </AppBar>
  );
};

SatniAppBar.propTypes = {
  setSearchExpression: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  drawerWidth: PropTypes.number.isRequired,
};

export default SatniAppBar;
