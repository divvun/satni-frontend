import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import FilterBar from 'features/search/FilterBar';
import Articles from 'features/article/Articles';
import LemmaDetails from 'components/LemmaDetails.js';
import LangChooser from 'features/wantedlangs/LangChooser';
import DictChooser from 'features/wantedlangs/DictChooser';
import InfiniteStems from 'features/infinitestems/InfiniteStems';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative'
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(900 + theme.spacing(3, 2))]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  heroContent: {
    margin: '0 auto',
    padding: `${theme.spacing(2)}px 0 ${theme.spacing(2)}px`
  },
  }
});


const Home = () => (
  <p>Bures boahttin!</p>
);

const AsyncApp = ({classes, match}) => {
  const [currentLemma, setCurrentLemma] = useState('');
  const [searchExpression, setSearchExpression] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleLemma = lemma => setCurrentLemma(lemma);
  const handleSearch = event => setSearchExpression(event.target.value);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap className={classes.toolbarTitle}>
          sátni.org
          </Typography>
          <FilterBar searchHandler={handleSearch} />
          <div>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}><LangChooser /></MenuItem>
              <MenuItem onClick={handleClose}><DictChooser /></MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <div className={classes.heroContent}>
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
        </div>
      </main>
        </Grid>
    </React.Fragment>);
};

AsyncApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AsyncApp);
