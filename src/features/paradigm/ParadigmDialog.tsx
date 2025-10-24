import React from 'react';
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

import Paradigm from './Paradigm';

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
  const classes = useStyles();

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
            <Trans>Paradigm</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.root}>
        <DialogContent>
          <Paradigm lemma={lemma} language={language} pos={pos} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ParadigmDialog;
