import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

const SpeakerChooserDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const [selectedVoices, setSelectedVoices] = useState(getAllSelectedVoices());

  const handleVoiceChange = (language, voice) => {
    const newVoices = { ...selectedVoices, [language]: voice };
    setSelectedVoices(newVoices);
    localStorage.setItem('ttsVoices', JSON.stringify(newVoices));
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="SpeakerChooser"
      open={open}
      maxWidth="md"
      fullWidth
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

SpeakerChooserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SpeakerChooserDialog;
