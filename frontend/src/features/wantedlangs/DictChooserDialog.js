import React from 'react';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

import DictChooser from './DictChooser';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

const DictChooserDialog = (props) => {
  const classes = useStyles();
  const {open, onClose} = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby='DictChooser' open={open}>
      <DialogTitle id='simple-dialog-title'>
        <Typography variant='h6'>
          DictChooser
        </Typography>
        {onClose ? (
          <IconButton
            aria-label='close'
            onClick={onClose}
            className={classes.closeButton}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <DictChooser />
    </Dialog>
  );
};

export default DictChooserDialog;
