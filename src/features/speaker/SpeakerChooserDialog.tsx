import React, { useState } from 'react';
// @ts-ignore - @lingui/macro types compatibility
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

import SpeakerChooser from './SpeakerChooser';
import { getAllSelectedVoices } from './speakerVoices';

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

interface SpeakerChooserDialogProps {
  open: boolean;
  onClose: () => void;
}

const SpeakerChooserDialog: React.FC<SpeakerChooserDialogProps> = ({
  open,
  onClose,
}) => {
  const classes = useStyles();
  const [selectedVoices, setSelectedVoices] = useState<Record<string, string>>(
    getAllSelectedVoices(),
  );

  const handleVoiceChange = (language: string, voice: string) => {
    const newVoices = { ...selectedVoices, [language]: voice };
    setSelectedVoices(newVoices);
    localStorage.setItem('ttsVoices', JSON.stringify(newVoices));
  };

  const handleClose = () => {
    // Use setTimeout to ensure focus is released before closing
    setTimeout(() => {
      onClose();
    }, 0);
  };

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Dialog
      onClose={handleClose}
      aria-labelledby="SpeakerChooser"
      open={open}
      maxWidth="md"
      fullWidth
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
            <Trans>Choose TTS voices</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Box className={classes.root}>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <DialogContent>
          <SpeakerChooser
            selectedVoices={selectedVoices}
            onVoiceChange={handleVoiceChange}
          />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default SpeakerChooserDialog;
