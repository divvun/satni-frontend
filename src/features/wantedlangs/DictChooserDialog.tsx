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

import setWantedDicts from "../../operations/mutations/setWantedDicts";
import { GET_LANGS_DICTS } from "../../operations/queries/getLangsDicts";
import DictChooser from "./DictChooser";

interface LangsDictsData {
  wantedDicts: string[];
}

interface DictChooserDialogProps {
  open: boolean;
  onClose: () => void;
}

const DictChooserDialog: React.FC<DictChooserDialogProps> = ({
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

  const { wantedDicts: dicts } = getLangsDictsResult.data;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="DictChooser"
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
            <Trans>Choose dictionaries</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2, mb: 3, mr: 8, ml: 8 }}>
        <DialogContent>
          <DictChooser dicts={dicts} setDicts={setWantedDicts} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default DictChooserDialog;
