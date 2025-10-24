import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import AppBar from '@mui/material/AppBar';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Box from '@mui/material/Box';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Dialog from '@mui/material/Dialog';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import DialogContent from '@mui/material/DialogContent';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import IconButton from '@mui/material/IconButton';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import {} from '@mui/material/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Toolbar from '@mui/material/Toolbar';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@mui/material/Typography';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import React from 'react';

import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import LangChooser from './LangChooser';

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
    // @ts-ignore - Material-UI v4 compatibility
    <Dialog
      onClose={handleClose}
      aria-labelledby="LangChooser"
      open={open}
      disableRestoreFocus
    >
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <AppBar className={classes.appBar}>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Toolbar>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <CloseIcon />
          </IconButton>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <Typography variant="h6" className={classes.title}>
            <Trans>Choose languages</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Box className={classes.root}>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <DialogContent>
          <LangChooser langs={langs} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default LangChooserDialog;
