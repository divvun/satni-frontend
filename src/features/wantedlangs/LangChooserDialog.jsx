import { useQuery } from '@apollo/client';
import { Trans } from '@lingui/macro';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
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

const LangChooserDialog = ({ open, onClose }) => {
  const getLangsDictsResult = useQuery(GET_LANGS_DICTS);
  const { srcLangs: langs } = getLangsDictsResult.data;
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="LangChooser" open={open}>
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
            <Trans>Choose languages</Trans>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.root}>
        <DialogContent>
          <LangChooser langs={langs} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

LangChooserDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LangChooserDialog;
