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

import Searcher from 'features/search/Searcher';
import Articles from 'features/article/Articles';
import LemmaDetails from 'components/LemmaDetails.js';
import LangChooser from 'features/wantedlangs/LangChooser';
import DictChooser from 'features/wantedlangs/DictChooser';
import InfiniteStems from 'features/infinitestems/InfiniteStems';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  appBar: {
    position: 'relative'
  },
  toolbarTitle: {
    flex: 1
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
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing(8)}px 0 ${theme.spacing(6)}px`
  },
  footer: {
    marginTop: theme.spacing(8),
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(6)}px 0`
  }
});

const footers = [
  {
    title: 'Feedback',
    description: [
      {
        text: 'Please report any errors to us',
        address: 'mailto:feedback@divvun.no'
      }
    ]
  },
  {
    title: 'Sámi dictionaries and terms delivered by',
    description: [
      {
        text: 'Divvun',
        address: 'http://divvun.no'
      },
      {
        text: 'Giellagáldu',
        address: 'https://giella.org'
      },
      {
        text: 'Giellatekno',
        address: 'http://giellatekno.uit.no'
      }
    ]
  }
];

const Home = () => (
  <p>Bures boahttin!</p>
);

const AsyncApp = ({classes, match}) => {
  const [currentLemma, setCurrentLemma] = useState('')
  const [searchExpression, setSearchExpression] = useState('')

  function handleLemma(lemma) {
    setCurrentLemma(lemma)
  }

  return (
    <React.Fragment>
    <CssBaseline />
    <AppBar position='static' color='default' className={classes.appBar}>
      <Toolbar>
        <Typography variant='h6' color='inherit' noWrap className={classes.toolbarTitle}>
          <a href='http://sátni.org'>sátni.org</a>
        </Typography>
      </Toolbar>
    </AppBar>
    <main className={classes.layout}>
        <div className={classes.heroContent}>
          <Grid container>
            <Grid item>
            <LangChooser />
            <DictChooser />
            </Grid>
          <Grid item xs={4}>
            <InfiniteStems lemmaHandler={handleLemma}/>
          </Grid>
          <Grid item xs={8}>
            {currentLemma ?
              <Articles lemma={currentLemma}/> :
              <Home/>
            }
            </Grid>
            </Grid>
        </div>
    </main>
    {/* Footer */}
    <footer className={classNames(classes.footer, classes.layout)}>
      <Grid container spacing={0} justify='space-evenly'>
        {footers.map(footer => (
          <Grid item xs key={footer.title}>
            <Typography variant='h6' color='textPrimary' gutterBottom>
              {footer.title}
            </Typography>
            {footer.description.map(item => (
              <Typography key={item.text} variant='subtitle1' color='textSecondary'>
                <a href={item.address}>{item.text}</a>
              </Typography>
              ))}
          </Grid>
          ))}
      </Grid>
    </footer>
    {/* End footer */}

  </React.Fragment>)
};

AsyncApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AsyncApp);
