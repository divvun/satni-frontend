import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import FeedbackIcon from '@material-ui/icons/Feedback';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PropTypes from 'prop-types';

import DictChooserDialog from '../features/wantedlangs/DictChooserDialog';

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

  const [openDictChooser, setOpenDictChooser] = useState(false);
  const handleClickDictChooserDialog = () => {
    setOpenDictChooser(true);
  };
  const handleCloseDictChooserDialog = () => {
    setOpenDictChooser(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbarDense} />
      <Divider />
      <List>
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
        <DictChooserDialog
          open={openDictChooser}
          onClose={handleCloseDictChooserDialog}
        />
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
      </List>
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
