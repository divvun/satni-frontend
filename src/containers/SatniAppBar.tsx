import React from "react";
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from "@lingui/react/macro";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

import HelpDialog from "./HelpDialog";

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
        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
          }}
        >
          {/* @ts-ignore - React Router DOM v5 compatibility */}
          <Link
            style={{ color: "white" }}
            to="/"
            onClick={() => setSearchExpression("")}
          >
            sátni.org
          </Link>
        </Typography>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
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
          <IconButton
            color="inherit"
            aria-label="Settings"
            edge="start"
            onClick={handleClickHelpDialog}
            sx={{
              ml: 1,
            }}
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
