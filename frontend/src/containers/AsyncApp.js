import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/Inbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Articles from 'features/article/Articles';
import DictChooserDialog from 'features/wantedlangs/DictChooserDialog';
import FilterBar from 'features/search/FilterBar';
import InfiniteStems from 'features/infinitestems/InfiniteStems';
import LemmaDetails from 'components/LemmaDetails.js';
import LangChooserDialog from 'features/wantedlangs/LangChooserDialog';

const drawerWidth = 240;

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative',
    flexDirection: 'column',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    height: '80vh',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    }
  }
});

const Home = () => (
  <p>Bures boahttin!</p>
);

const AsyncApp = ({classes, match}) => {
  const [currentLemma, setCurrentLemma] = useState('');
  const [searchExpression, setSearchExpression] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const keysOpen = Boolean(anchorEl);

  const handleLemma = lemma => setCurrentLemma(lemma);
  const handleSearch = value => setSearchExpression(value);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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
          key='LangChooser'
          onClick={handleClickLangChooserDialog}
          button
        >
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary='LangChooser' />
          <LangChooserDialog
            open={openLangChooser}
            onClose={handleCloseLangChooserDialog} />
        </ListItem>
        <ListItem
          key='DictChooser'
          onClick={handleClickDictChooserDialog}
          button
        >
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary='DictChooser' />
          <DictChooserDialog
            open={openDictChooser}
            onClose={handleCloseDictChooserDialog} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className={classes.container}>
      <CssBaseline />
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap className={classes.toolbarTitle}>
          sátni.org
          </Typography>
          <FilterBar searchHandler={handleSearch} />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation='css'>
          <Drawer
            // container={container}
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
        <Hidden xsDown implementation='css'>
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
      <main className={classes.main}>
        <Grid container>
          <Grid item xs={4}>
            {searchExpression ?
              <InfiniteStems
                searchExpression={searchExpression}
                lemmaHandler={handleLemma} /> :
              <p>Waiting for input</p>
            }
          </Grid>
          <Grid item xs={8}>
            {currentLemma ?
              <Articles
                lemma={currentLemma}
                lemmaHandler={handleLemma} /> :
              <Home />
            }
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

AsyncApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AsyncApp);
