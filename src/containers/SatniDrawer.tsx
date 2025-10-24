import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
import { ListSubheader } from '@mui/material';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Theme } from '@mui/material/styles';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LanguageIcon from '@mui/icons-material/Language';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import TranslateIcon from '@mui/icons-material/Translate';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import SpeakerChooserDialog from '../features/speaker/SpeakerChooserDialog';
import DictChooserDialog from '../features/wantedlangs/DictChooserDialog';
import LangChooserDialog from '../features/wantedlangs/LangChooserDialog';
import MetaLanguageSelector from './MetaLanguageSelector';

const Footer: React.FC = () => (
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

interface SatniDrawerProps {
  drawerWidth: number;
  handleDrawerToggle: () => void;
  mobileOpen: boolean;
}

const SatniDrawer: React.FC<SatniDrawerProps> = ({
  drawerWidth,
  handleDrawerToggle,
  mobileOpen,
}) => {
  const useStyles = makeStyles((theme: Theme) => ({
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

  const [openLangChooser, setOpenLangChooser] = useState<boolean>(false);
  const handleClickLangChooserDialog = () => {
    setOpenLangChooser(true);
  };
  const handleCloseLangChooserDialog = () => {
    setOpenLangChooser(false);
  };

  const [openDictChooser, setOpenDictChooser] = useState<boolean>(false);
  const handleClickDictChooserDialog = () => {
    setOpenDictChooser(true);
  };
  const handleCloseDictChooserDialog = () => {
    setOpenDictChooser(false);
  };

  const [openSpeakerChooser, setOpenSpeakerChooser] = useState<boolean>(false);
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
        <ListItemButton
          key="LangChooser"
          onClick={handleClickLangChooserDialog}
        >
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary={<Trans>Languages</Trans>} />
        </ListItemButton>
        <ListItemButton
          key="DictChooser"
          onClick={handleClickDictChooserDialog}
        >
          <ListItemIcon>
            <MenuBookIcon />
          </ListItemIcon>
          <ListItemText primary={<Trans>Dictionaries</Trans>} />
        </ListItemButton>
        <ListItemButton
          key="SpeakerChooser"
          onClick={handleClickSpeakerChooserDialog}
        >
          <ListItemIcon>
            <RecordVoiceOverIcon />
          </ListItemIcon>
          <ListItemText primary={<Trans>TTS Voices</Trans>} />
        </ListItemButton>
        <ListItem key="Feedback" component="a" href="mailto:feedback@divvun.no">
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
        <ListItem key="Site language">
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
      <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
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
      </Box>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </nav>
  );
};

export default SatniDrawer;
