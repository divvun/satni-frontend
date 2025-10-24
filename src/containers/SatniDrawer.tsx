import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import { ListSubheader } from '@material-ui/core';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Divider from '@material-ui/core/Divider';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Drawer from '@material-ui/core/Drawer';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Hidden from '@material-ui/core/Hidden';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import List from '@material-ui/core/List';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ListItem from '@material-ui/core/ListItem';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ListItemIcon from '@material-ui/core/ListItemIcon';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, Theme } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import FeedbackIcon from '@material-ui/icons/Feedback';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import LanguageIcon from '@material-ui/icons/Language';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import MenuBookIcon from '@material-ui/icons/MenuBook';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import TranslateIcon from '@material-ui/icons/Translate';
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

const SatniDrawer: React.FC<SatniDrawerProps> = ({ drawerWidth, handleDrawerToggle, mobileOpen }) => {
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
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <ListItem
          key="Feedback"
          button
          component="a"
          href="mailto:feedback@divvun.no"
        >
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <ListItemIcon>
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <FeedbackIcon />
          </ListItemIcon>
          {/* @ts-ignore - Material-UI v4 compatibility */}
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
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Hidden smUp implementation="css">
        {/* @ts-ignore - Material-UI v4 compatibility */}
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
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Hidden smDown implementation="css">
        {/* @ts-ignore - Material-UI v4 compatibility */}
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

export default SatniDrawer;