import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import AppBar from '@material-ui/core/AppBar';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Hidden from '@material-ui/core/Hidden';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import IconButton from '@material-ui/core/IconButton';
import { makeStyles, Theme } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Toolbar from '@material-ui/core/Toolbar';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Tooltip from '@material-ui/core/Tooltip';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@material-ui/core/Typography';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import HelpDialog from './HelpDialog';

interface SatniAppBarProps {
  setSearchExpression: (expression: string) => void;
  handleDrawerToggle: () => void;
  drawerWidth: number;
}

const SatniAppBar: React.FC<SatniAppBarProps> = ({
  setSearchExpression,
  handleDrawerToggle,
  drawerWidth,
}) => {
  const useStyles = makeStyles((theme: Theme) => ({
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
    helpButton: {
      marginLeft: theme.spacing(1),
    },
  }));
  const classes = useStyles();

  const [openHelpDialog, setOpenHelpDialog] = useState<boolean>(false);
  const handleClickHelpDialog = () => {
    setOpenHelpDialog(true);
  };
  const handleCloseHelpDialog = () => {
    setOpenHelpDialog(false);
  };

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <AppBar position="static" className={classes.appBar}>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Toolbar variant="dense">
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Typography variant="h6" noWrap className={classes.title}>
          {/* @ts-ignore - React Router DOM v5 compatibility */}
          <Link
            className={classes.titleLink}
            to="/"
            onClick={() => setSearchExpression('')}
          >
            sátni.org
          </Link>
        </Typography>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Hidden mdUp>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <Tooltip
            title={<Trans>Settings</Trans>}
            aria-label={<Trans>Settings</Trans>}
          >
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <IconButton
              color="inherit"
              aria-label="Settings"
              edge="start"
              onClick={handleDrawerToggle}
            >
              {/* @ts-ignore - Material-UI v4 compatibility */}
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Hidden>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Tooltip title={<Trans>Help</Trans>} aria-label={<Trans>Help</Trans>}>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <IconButton
            color="inherit"
            aria-label="Settings"
            edge="start"
            onClick={handleClickHelpDialog}
            className={classes.helpButton}
          >
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <HelpOutlineIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
      <HelpDialog open={openHelpDialog} onClose={handleCloseHelpDialog} />
    </AppBar>
  );
};

export default SatniAppBar;