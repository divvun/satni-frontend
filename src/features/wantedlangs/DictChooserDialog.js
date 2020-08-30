import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import { useCookies } from 'react-cookie';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import DictChooser from './DictChooser';

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

const DictChooserDialog = ({open, onClose}) => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(['wantedDicts']);
  const [dicts, setDicts] = useState(cookies.wantedDicts);

  const handleClose = () => {
    setCookie('wantedDicts', dicts);
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby='DictChooser' open={open}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
            <CloseIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            <Trans>Choose dictionaries</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.root}>
        <DialogContent>
          <DictChooser
            dicts={dicts}
            setDicts={setDicts}
          />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default DictChooserDialog;
