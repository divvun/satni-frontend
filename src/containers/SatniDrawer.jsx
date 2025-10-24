import { Trans } from '@lingui/macro';
import { ListSubheader } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import FeedbackIcon from '@material-ui/icons/Feedback';
import LanguageIcon from '@material-ui/icons/Language';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import TranslateIcon from '@material-ui/icons/Translate';
import PropTypes from 'prop-types';
import { useState } from 'react';
import SpeakerChooserDialog from '../features/speaker/SpeakerChooserDialog';
import DictChooserDialog from '../features/wantedlangs/DictChooserDialog';
import LangChooserDialog from '../features/wantedlangs/LangChooserDialog';
import MetaLanguageSelector from './MetaLanguageSelector';

const Footer = () => (
  <List
    subheader={
      <ListSubheader>
        <Trans>Delivered by</Trans>
      </ListSubheader>
    }
  >
    <ListItem>
      <ListItemText
        inset
        primary={
          <a href="http://divvun.no" target="_blank" rel="noopener noreferrer">
            Divvun
          </a>
        }
      />
    </ListItem>
    <ListItem>
      <ListItemText
        inset
        primary={
          <Trans>
            <a
              href="http://giella.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Giellagáldu
            </a>
          </Trans>
        }
      />
    </ListItem>
    <ListItem>
      <ListItemText
        inset
        primary={
          <a
            href="http://giellatekno.uit.no"
            target="_blank"
            rel="noopener noreferrer"
          >
            Giellatekno
          </a>
        }
      />
    </ListItem>
    <ListItem>
      <ListItemText inset primary="Pekka Sammallahti" />
    </ListItem>
  </List>
);

const SatniDrawer = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
  const useStyles = makeStyles((theme) => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbarDense: {
      minHeight: 48,
    },
  }));
  const classes = useStyles();

  const [openLangChooser, setOpenLangChooser] = useState(false);
  const handleClickLangChooserDialog = () => {
    setOpenLangChooser(true);
  };
  const handleCloseLangChooserDialog = () => {
    setOpenLangChooser(false);
  };

  const [openDictChooser, setOpenDictChooser] = useState(false);
  const handleClickDictChooserDialog = () => {
    setOpenDictChooser(true);
  };
  const handleCloseDictChooserDialog = () => {
    setOpenDictChooser(false);
  };

  const [openSpeakerChooser, setOpenSpeakerChooser] = useState(false);
  const handleClickSpeakerChooserDialog = () => {
    setOpenSpeakerChooser(true);
  };
  const handleCloseSpeakerChooserDialog = () => {
    setOpenSpeakerChooser(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbarDense} />
      <Divider />
      <List>
        <ListItem
          key="LangChooser"
          onClick={handleClickLangChooserDialog}
          button
        >
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary={<Trans>Languages</Trans>} />
        </ListItem>
        <ListItem
          key="DictChooser"
          onClick={handleClickDictChooserDialog}
          button
        >
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={<Trans>Dictionaries</Trans>} />
        </ListItem>
        <ListItem
          key="SpeakerChooser"
          onClick={handleClickSpeakerChooserDialog}
          button
        >
          <ListItemIcon>
            <RecordVoiceOverIcon />
          </ListItemIcon>
          <ListItemText primary={<Trans>TTS Voices</Trans>} />
        </ListItem>
        <ListItem
          key="Feedback"
          button
          component="a"
          href="mailto:feedback@divvun.no"
        >
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
        <ListItem key="Site language" button>
          <ListItemIcon>
            <TranslateIcon />
          </ListItemIcon>
          <MetaLanguageSelector />
        </ListItem>
        <ListItem>
          <Footer />
        </ListItem>
      </List>
      <LangChooserDialog
        open={openLangChooser}
        onClose={handleCloseLangChooserDialog}
      />
      <DictChooserDialog
        open={openDictChooser}
        onClose={handleCloseDictChooserDialog}
      />
      <SpeakerChooserDialog
        open={openSpeakerChooser}
        onClose={handleCloseSpeakerChooserDialog}
      />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation="css">
        <Drawer
          container={null}
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

SatniDrawer.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
};

export default SatniDrawer;
