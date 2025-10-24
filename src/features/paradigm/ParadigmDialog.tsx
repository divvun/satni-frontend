import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import AppBar from '@material-ui/core/AppBar';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Box from '@material-ui/core/Box';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Dialog from '@material-ui/core/Dialog';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import DialogContent from '@material-ui/core/DialogContent';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import IconButton from '@material-ui/core/IconButton';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Toolbar from '@material-ui/core/Toolbar';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@material-ui/core/Typography';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import CloseIcon from '@material-ui/icons/Close';

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

const ParadigmDialog: React.FC<ParadigmDialogProps> = ({ lemma, pos, language, open, onClose }) => {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Dialog onClose={handleClose} aria-labelledby="Paradigm" open={open}>
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
            <Trans>Paradigm</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Box className={classes.root}>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <DialogContent>
          <Paradigm lemma={lemma} language={language} pos={pos} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ParadigmDialog;