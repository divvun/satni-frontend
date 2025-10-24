import { useQuery } from '@apollo/client';
// @ts-ignore - @lingui/macro has no type definitions
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
import React from 'react';

import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import LangChooser from './LangChooser';

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

interface LangsDictsData {
  srcLangs: string[];
}

interface LangChooserDialogProps {
  open: boolean;
  onClose: () => void;
}

const LangChooserDialog: React.FC<LangChooserDialogProps> = ({
  open,
  onClose,
}) => {
  const getLangsDictsResult = useQuery<LangsDictsData>(GET_LANGS_DICTS);
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  // Handle loading/error states
  if (getLangsDictsResult.loading || !getLangsDictsResult.data) {
    return null;
  }

  const { srcLangs: langs } = getLangsDictsResult.data;

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Dialog onClose={handleClose} aria-labelledby="LangChooser" open={open}>
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
            <Trans>Choose languages</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Box className={classes.root}>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <DialogContent>
          <LangChooser langs={langs} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default LangChooserDialog;
