import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';

import DictChooser from './DictChooser';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(8),
    marginLeft: theme.spacing(8)
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
      <Box className={classes.root}>
        <DialogTitle id='simple-dialog-title'>
          <Trans>Choose dictionaries</Trans>
        </DialogTitle>
        <DictChooser />
      </Box>
    </Dialog>
  );
};

export default DictChooserDialog;
