import React from "react";
import { Trans } from "@lingui/react/macro";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import { DictWelcome, SearchWelcome } from "./Welcome";

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

const HelpDialog: React.FC<HelpDialogProps> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="Paradigm" open={open}>
      <AppBar
        sx={{
          position: "relative",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              ml: 2,
              flex: 1,
            }}
          >
            <Trans>Help</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          mt: 2,
          mb: 3,
          mr: 8,
          ml: 8,
        }}
      >
        <DialogContent>
          <SearchWelcome />
          <DictWelcome />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default HelpDialog;
