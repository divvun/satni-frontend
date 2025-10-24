import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Toolbar from '@mui/material/Toolbar';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Tooltip from '@mui/material/Tooltip';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@mui/material/Typography';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
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
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <Tooltip title={<Trans>Settings</Trans>}>
            <IconButton
              color="inherit"
              aria-label="Settings"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Tooltip title={<Trans>Help</Trans>}>
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
