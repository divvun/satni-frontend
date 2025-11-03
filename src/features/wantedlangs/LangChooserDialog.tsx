import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from '@lingui/react/macro';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import {} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import React from 'react';

import {GET_LANGS_DICTS} from '../../operations/queries/getLangsDicts';
import LangChooser from "./LangChooser";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(8),
    marginLeft: theme.spacing(8),
  },
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

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
  const classes = useStyles();

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
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Trans>Choose languages</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.root}>
        <DialogContent>
          <LangChooser langs={langs} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default LangChooserDialog;
