import React from "react";
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from "@lingui/react/macro";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
// import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
// import { Link } from "react-router-dom";

import HelpDialog from "./HelpDialog";

interface SatniAppBarProps {
  setSearchExpression: (expression: string) => void;
  handleDrawerToggle: () => void;
  drawerWidth: number;
}

const SatniAppBar: React.FC<SatniAppBarProps> = ({
  handleDrawerToggle,
  drawerWidth,
}) => {
  const [openHelpDialog, setOpenHelpDialog] = useState<boolean>(false);
  const handleClickHelpDialog = () => {
    setOpenHelpDialog(true);
  };
  const handleCloseHelpDialog = () => {
    setOpenHelpDialog(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        position: "relative",
        flexDirection: "column",
        width: { md: `calc(100% - ${drawerWidth}px)` },
        marginLeft: { md: `${drawerWidth}px` },
      }}
    >
      <Toolbar variant="dense">
        <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
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
          {/* Mobile-only home icon linking to sátni.org */}
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
        {/* Spacer to push Help icon to the right; desktop text home removed */}
        <Box sx={{ flexGrow: 1 }} />
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
      </Toolbar>
      <HelpDialog open={openHelpDialog} onClose={handleCloseHelpDialog} />
    </AppBar>
  );
};

export default SatniAppBar;
