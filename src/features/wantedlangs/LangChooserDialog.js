import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import LangChooser from './LangChooser';
import { wantedLangsVar } from 'apolloCache';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(8),
    marginLeft: theme.spacing(8)
  },
  appBar: {
    position: 'relative'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));

const LangChooserDialog = (props) => {
  const classes = useStyles();
  const {open, onClose} = props;
  const [langs, setLangs] = useState(wantedLangsVar());

  const handleClose = () => {
    wantedLangsVar(langs);
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby='LangChooser' open={open}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <Trans>Choose languages</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.root}>
        <DialogContent>
          <LangChooser
            langs={langs}
            setLangs={setLangs}
          />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default LangChooserDialog;
