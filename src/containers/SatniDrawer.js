import React, { useState } from 'react';
import { Trans } from '@lingui/macro';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Hidden from '@material-ui/core/Hidden';
import HomeIcon from '@material-ui/icons/Home';
import LanguageIcon from '@material-ui/icons/Language';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TranslateIcon from '@material-ui/icons/Translate';

import DictChooserDialog from 'features/wantedlangs/DictChooserDialog';
import LangChooserDialog from 'features/wantedlangs/LangChooserDialog';
import MetaLanguageSelector from './MetaLanguageSelector';

const SatniDrawer = (props) => {
  const {
    drawerWidth,
    handleDrawerToggle,
    language,
    mobileOpen,
    onLanguageChange,
    handleSearch,
    container
  } = props;

  const useStyles = makeStyles(theme => ({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0
      }
    },
    drawerPaper: {
      width: drawerWidth
    },
    toolbar: theme.mixins.toolbar
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

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem
          key='Home'
          button
          onClick={() => {
            handleSearch('');
          }}
        >
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary=<Link to='/'><Trans>Start</Trans></Link> />
        </ListItem>
        <ListItem
          key='LangChooser'
          onClick={handleClickLangChooserDialog}
          button
        >
          <ListItemIcon><LanguageIcon /></ListItemIcon>
          <ListItemText primary={<Trans>Languages</Trans>} />
        </ListItem>
        <ListItem
          key='DictChooser'
          onClick={handleClickDictChooserDialog}
          button
        >
          <ListItemIcon><MenuBookIcon /></ListItemIcon>
          <ListItemText primary={<Trans>Dictionaries</Trans>} />
        </ListItem>
        <ListItem
          key='Feedback'
          button
          component='a'
          href='mailto:feedback@divvun.no'
        >
          <ListItemIcon><FeedbackIcon /></ListItemIcon>
          <ListItemText primary='Feedback' />
        </ListItem>
        <ListItem
          key='Site language'
          button
        >
          <ListItemIcon><TranslateIcon /></ListItemIcon>
          <MetaLanguageSelector
            language={language}
            onChangeLangage={onLanguageChange}
          />
        </ListItem>
      </List>
      <LangChooserDialog
        open={openLangChooser}
        onClose={handleCloseLangChooserDialog} />
      <DictChooserDialog
        open={openDictChooser}
        onClose={handleCloseDictChooserDialog} />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label='mailbox folders'>
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Hidden smUp implementation='css'>
        <Drawer
          container={container}
          variant='temporary'
          anchor={'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden smDown implementation='css'>
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant='permanent'
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SatniDrawer;
