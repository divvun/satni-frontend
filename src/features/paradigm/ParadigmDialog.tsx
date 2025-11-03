import React from "react";
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from "@lingui/react/macro";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import Paradigm from "./Paradigm";

interface ParadigmDialogProps {
  lemma: string;
  pos: string;
  language: string;
  open: boolean;
  onClose: () => void;
}

const ParadigmDialog: React.FC<ParadigmDialogProps> = ({
  lemma,
  pos,
  language,
  open,
  onClose,
}) => {
  const handleClose = () => {
    // Use setTimeout to ensure focus is released before closing
    setTimeout(() => {
      onClose();
    }, 0);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="Paradigm"
      open={open}
      fullWidth
      maxWidth="md"
      disableRestoreFocus
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2, flex: 1 }}>
            <Trans>Paradigm</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2, mb: 3, mr: 8, ml: 8 }}>
        <DialogContent>
          <Paradigm lemma={lemma} language={language} pos={pos} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ParadigmDialog;
