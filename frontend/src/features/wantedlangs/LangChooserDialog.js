import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import LangChooser from './LangChooser';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(8),
    marginLeft: theme.spacing(8)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

const LangChooserDialog = (props) => {
  const classes = useStyles();
  const {open, onClose} = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby='LangChooser' open={open}>
      <Box className={classes.root}>
        <DialogTitle id='simple-dialog-title'>
          <Trans>Choose languages</Trans>
        </DialogTitle>
        <LangChooser />
      </Box>
    </Dialog>
  );
};

export default LangChooserDialog;
