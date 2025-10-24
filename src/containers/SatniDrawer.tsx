import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import { ListSubheader } from '@mui/material';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Divider from '@mui/material/Divider';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import List from '@mui/material/List';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ListItem from '@mui/material/ListItem';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ListItemIcon from '@mui/material/ListItemIcon';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ListItemText from '@mui/material/ListItemText';
import { Theme } from '@mui/material/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import FeedbackIcon from '@mui/icons-material/Feedback';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import LanguageIcon from '@mui/icons-material/Language';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import MenuBookIcon from '@mui/icons-material/MenuBook';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import TranslateIcon from '@mui/icons-material/Translate';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import SpeakerChooserDialog from '../features/speaker/SpeakerChooserDialog';
import DictChooserDialog from '../features/wantedlangs/DictChooserDialog';
import LangChooserDialog from '../features/wantedlangs/LangChooserDialog';
import MetaLanguageSelector from './MetaLanguageSelector';

const Footer: React.FC = () => (
  // @ts-ignore - Material-UI v4 compatibility
  <List
    subheader={
      // @ts-ignore - Material-UI v4 compatibility
      <ListSubheader>
        <Trans>Delivered by</Trans>
      </ListSubheader>
    }
  >
    {/* @ts-ignore - Material-UI v4 compatibility */}
    <ListItem>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <ListItemText
        inset
        primary={
          <a href="http://divvun.no" target="_blank" rel="noopener noreferrer">
            Divvun
          </a>
        }
      />
    </ListItem>
    {/* @ts-ignore - Material-UI v4 compatibility */}
    <ListItem>
      {/* @ts-ignore - Material-UI v4 compatibility */}
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
    {/* @ts-ignore - Material-UI v4 compatibility */}
    <ListItem>
      {/* @ts-ignore - Material-UI v4 compatibility */}
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
    {/* @ts-ignore - Material-UI v4 compatibility */}
    <ListItem>
      {/* @ts-ignore - Material-UI v4 compatibility */}
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
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Divider />
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <List>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <ListItem
          key="LangChooser"
          onClick={handleClickLangChooserDialog}
          button
        >
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ListItemIcon>
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <LanguageIcon />
          </ListItemIcon>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ListItemText primary={<Trans>Languages</Trans>} />
        </ListItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <ListItem
          key="DictChooser"
          onClick={handleClickDictChooserDialog}
          button
        >
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ListItemIcon>
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <MenuBookIcon />
          </ListItemIcon>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ListItemText primary={<Trans>Dictionaries</Trans>} />
        </ListItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <ListItem
          key="SpeakerChooser"
          onClick={handleClickSpeakerChooserDialog}
          button
        >
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ListItemIcon>
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <RecordVoiceOverIcon />
          </ListItemIcon>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ListItemText primary={<Trans>TTS Voices</Trans>} />
        </ListItem>
        <ListItem key="Feedback" component="a" href="mailto:feedback@divvun.no">
          <ListItemIcon>
            <FeedbackIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <ListItem key="Site language" button>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ListItemIcon>
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <TranslateIcon />
          </ListItemIcon>
          <MetaLanguageSelector />
        </ListItem>
        {/* @ts-ignore - Material-UI v4 compatibility */}
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
