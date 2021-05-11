import React, { useEffect, useState } from 'react';
import * as Sentry from '@sentry/react';
import { gql, useQuery } from '@apollo/client';
import { Link, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import qs from 'qs';

import { locationParser } from '../utils';
import Articles from '../features/article/Articles';
import { WelcomeHeader } from './Welcome';
import InfiniteStems from '../features/infinitestems/InfiniteStems';
import SatniAppBar from './SatniAppBar';
import SatniDrawer from './SatniDrawer';
import StatusBar from './StatusBar';

const drawerWidth = 240;

export const GET_LANGS_AND_DICTS = gql`
  query GetLangsAndDicts {
    wantedDicts @client
    wantedLangs @client
  }
`;

const styles = (theme) => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.grey,
    },
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '80vh',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginTop: theme.spacing(1),
  },
});

const Main = ({
  currentLemma,
  locationDict,
  searchExpression,
  wantedDicts,
  wantedLangs,
  currentDict,
}) => (
  <Switch>
    <Redirect from={`/article/${currentLemma}`} to={`/${currentLemma}`} />
    <Redirect from="/details" to={`/${locationDict.lemma}`} />
    <Route path="/">
      <Grid container>
        <Grid item xs={12}>
          {currentLemma || searchExpression ? (
            <StatusBar
              wantedDicts={wantedDicts}
              wantedLangs={wantedLangs}
              currentLemma={currentLemma}
            />
          ) : (
            <WelcomeHeader />
          )}
        </Grid>
        <Grid item xs={4}>
          {searchExpression && (
            <InfiniteStems
              searchExpression={searchExpression}
              wantedDicts={wantedDicts}
              wantedLangs={wantedLangs}
              currentDict={currentDict}
            />
          )}
        </Grid>
        <Grid item xs={8}>
          {currentLemma && (
            <Articles
              lemma={currentLemma}
              wantedDicts={wantedDicts}
              wantedLangs={wantedLangs}
            />
          )}
        </Grid>
      </Grid>
    </Route>
  </Switch>
);

Main.propTypes = {
  currentLemma: PropTypes.string.isRequired,
  locationDict: PropTypes.shape.isRequired,
  searchExpression: PropTypes.string.isRequired,
  wantedDicts: PropTypes.arrayOf.isRequired,
  wantedLangs: PropTypes.arrayOf.isRequired,
  currentDict: PropTypes.arrayOf.isRequired,
};

const AsyncApp = ({ classes }) => {
  const { data, error, loading } = useQuery(GET_LANGS_AND_DICTS);
  const [searchExpression, setSearchExpression] = useState('');
  const location = useLocation();
  const { currentLemma, currentDict } = locationParser(location.pathname);
  const locationDict = qs.parse(location.search.slice(1));

  const handleSearch = (value) => setSearchExpression(value);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    localStorage.setItem('wantedDicts', JSON.stringify(data.wantedDicts));
  }, [data.wantedDicts]);

  useEffect(() => {
    localStorage.setItem('wantedLangs', JSON.stringify(data.wantedLangs));
  }, [data.wantedLangs]);

  const wantedDicts = currentDict ? [currentDict] : data.wantedDicts;

  if (loading) return <div>Loading dicts and languages</div>;
  if (error) return <div>Error loading dicts and languages</div>;

  return (
    <div className={classes.container}>
      <CssBaseline />
      <SatniAppBar
        handleSearch={handleSearch}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <SatniDrawer
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        handleSearch={handleSearch}
      />
      <main className={classes.main}>
        <Sentry.ErrorBoundary
          fallback={({ error, resetError }) => (
            <React.Fragment>
              <div>You have encountered an error</div>
              <div>{error.toString()}</div>
              <Button
                color="primary"
                component={Link}
                to="/"
                onClick={() => {
                  setSearchExpression('');
                  resetError();
                }}
              >
                Click here to reset!
              </Button>
            </React.Fragment>
          )}
        >
          <Main
            currentLemma={currentLemma}
            locationDict={locationDict}
            searchExpression={searchExpression}
            wantedDicts={wantedDicts}
            wantedLangs={data.wantedLangs}
            currentDict={currentDict}
          />
        </Sentry.ErrorBoundary>
      </main>
    </div>
  );
};

AsyncApp.propTypes = {
  classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(AsyncApp);
