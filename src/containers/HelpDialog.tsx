import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/react/macro';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import { Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';

import { DictWelcome, SearchWelcome } from './Welcome';

interface HelpDialogProps {
  open: boolean;
  onClose: () => void;
}

const HelpDialog: React.FC<HelpDialogProps> = ({ open, onClose }) => {
  const useStyles = makeStyles((theme: Theme) => ({
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

  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="Paradigm" open={open}>
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
            <Trans>Help</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.root}>
        <DialogContent>
          <SearchWelcome />
          <DictWelcome />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default HelpDialog;
