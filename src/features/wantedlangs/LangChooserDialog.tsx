import { useQuery } from "@apollo/client/react";
// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from "@lingui/react/macro";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";

import { GET_LANGS_DICTS } from "../../operations/queries/getLangsDicts";
import LangChooser from "./LangChooser";

interface LangsDictsData {
  srcLangs: string[];
}

interface LangChooserDialogProps {
  open: boolean;
  onClose: () => void;
}

const LangChooserDialog: React.FC<LangChooserDialogProps> = ({
  open,
  onClose,
}) => {
  const getLangsDictsResult = useQuery<LangsDictsData>(GET_LANGS_DICTS);

  const handleClose = () => {
    // Use setTimeout to ensure focus is released before closing
    setTimeout(() => {
      onClose();
    }, 0);
  };

  // Handle loading/error states
  if (getLangsDictsResult.loading || !getLangsDictsResult.data) {
    return null;
  }

  const { srcLangs: langs } = getLangsDictsResult.data;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="LangChooser"
      open={open}
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
            <Trans>Choose languages</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2, mb: 3, mr: 8, ml: 8 }}>
        <DialogContent>
          <LangChooser langs={langs} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default LangChooserDialog;
