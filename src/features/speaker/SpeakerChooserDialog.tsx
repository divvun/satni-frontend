import React, { useState } from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
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
    <Dialog
      onClose={handleClose}
      aria-labelledby="SpeakerChooser"
      open={open}
      maxWidth="md"
      fullWidth
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
            <Trans>Choose TTS voices</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.root}>
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
