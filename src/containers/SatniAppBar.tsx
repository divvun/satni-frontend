import React from "react";
import { useQuery } from "@apollo/client/react";
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from "@lingui/react/macro";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";
// import { Link } from "react-router-dom";

import HelpDialog from "./HelpDialog";
import FilterBar from "../features/search/FilterBar";
import setDarkMode from "../operations/mutations/setDarkMode";
import {
  GET_DARK_MODE,
  type GetDarkModeQuery,
} from "../operations/queries/getDarkMode";

interface SatniAppBarProps {
  searchExpression: string;
  setSearchExpression: (expression: string) => void;
  handleDrawerToggle: () => void;
  drawerWidth: number;
}

const SatniAppBar: React.FC<SatniAppBarProps> = ({
  searchExpression,
  setSearchExpression,
  handleDrawerToggle,
  drawerWidth,
}) => {
  const theme = useTheme();
  const isVeryNarrow = useMediaQuery(theme.breakpoints.down(400));
  const [openHelpDialog, setOpenHelpDialog] = useState<boolean>(false);
  const [moreMenuAnchor, setMoreMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const darkModeQuery = useQuery<GetDarkModeQuery>(GET_DARK_MODE);
  const { darkMode = false } = darkModeQuery.data || {};

  const handleClickHelpDialog = () => {
    setOpenHelpDialog(true);
  };
  const handleCloseHelpDialog = () => {
    setOpenHelpDialog(false);
  };

  const handleMoreMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMoreMenuAnchor(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchor(null);
  };

  const handleDrawerClick = () => {
    handleMoreMenuClose();
    handleDrawerToggle();
  };

  const handleHelpClick = () => {
    handleMoreMenuClose();
    handleClickHelpDialog();
  };

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    handleMoreMenuClose();
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        top: 0,
        flexDirection: "column",
        width: { md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { md: `${drawerWidth}px` },
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <Toolbar variant="dense" sx={{ gap: 1 }}>
        {isVeryNarrow ? (
          // Very narrow devices: Only search field + menu button
          <>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <FilterBar
                inAppBar
                searchExpression={searchExpression}
                setSearchExpression={setSearchExpression}
              />
            </Box>
            <Tooltip title={<Trans>More</Trans>}>
              <IconButton
                color="inherit"
                aria-label="More options"
                edge="end"
                onClick={handleMoreMenuOpen}
              >
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
            <Menu
              anchorEl={moreMenuAnchor}
              open={Boolean(moreMenuAnchor)}
              onClose={handleMoreMenuClose}
            >
              <MenuItem onClick={handleDrawerClick}>
                <ListItemIcon>
                  <MenuIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <Trans>Menu</Trans>
                </ListItemText>
              </MenuItem>
              <MenuItem
                component="a"
                href="https://satni.org"
                onClick={handleMoreMenuClose}
              >
                <ListItemIcon>
                  <HomeIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <Trans>Home</Trans>
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={handleHelpClick}>
                <ListItemIcon>
                  <HelpOutlineIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  <Trans>Help</Trans>
                </ListItemText>
              </MenuItem>
              <MenuItem onClick={handleToggleDarkMode}>
                <ListItemIcon>
                  {darkMode ? (
                    <Brightness7Icon fontSize="small" />
                  ) : (
                    <Brightness4Icon fontSize="small" />
                  )}
                </ListItemIcon>
                <ListItemText>
                  {darkMode ? (
                    <Trans>Light mode</Trans>
                  ) : (
                    <Trans>Dark mode</Trans>
                  )}
                </ListItemText>
              </MenuItem>
            </Menu>
          </>
        ) : (
          // Normal mobile/desktop: Show all controls
          <>
            <Box
              sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
            >
              <Tooltip title={<Trans>Menu</Trans>}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title={<Trans>Home</Trans>}>
                <IconButton
                  color="inherit"
                  aria-label="Home"
                  edge="start"
                  component="a"
                  href="https://satni.org"
                  sx={{ mr: 1 }}
                >
                  <HomeIcon />
                </IconButton>
              </Tooltip>
            </Box>
            <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
              <FilterBar
                inAppBar
                searchExpression={searchExpression}
                setSearchExpression={setSearchExpression}
              />
            </Box>
            <Tooltip
              title={
                darkMode ? <Trans>Light mode</Trans> : <Trans>Dark mode</Trans>
              }
            >
              <IconButton
                color="inherit"
                aria-label="Toggle dark mode"
                onClick={handleToggleDarkMode}
              >
                {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
            <Tooltip title={<Trans>Help</Trans>}>
              <IconButton
                color="inherit"
                aria-label="Help"
                edge="end"
                onClick={handleClickHelpDialog}
              >
                <HelpOutlineIcon />
              </IconButton>
            </Tooltip>
          </>
        )}
      </Toolbar>
      <HelpDialog open={openHelpDialog} onClose={handleCloseHelpDialog} />
    </AppBar>
  );
};

export default SatniAppBar;
