import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import {
  Redirect,
  Route,
  Switch,
  useLocation
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import qs from 'qs';

import { locationParser } from 'utils';
import Articles from 'features/article/Articles';
import { DictWelcome, SearchWelcome, WelcomeHeader } from 'containers/Welcome';
import InfiniteStems from 'features/infinitestems/InfiniteStems';
import SatniAppBar from './SatniAppBar';
import SatniDrawer from './SatniDrawer';
import StatusBar from './StatusBar';

const drawerWidth = 240;

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  container: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    height: '80vh',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    marginTop: theme.spacing(1)
  }
});

const AsyncApp = ({classes}) => {
  const [searchExpression, setSearchExpression] = useState('');
  const location = useLocation();
  const {currentLemma, currentDict} = locationParser(location.pathname);
  const location_dict = qs.parse(location.search.slice(1));

  const handleSearch = value => setSearchExpression(value);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [cookies] = useCookies(['wantedLangs', 'wantedDicts']);

  const wantedDicts = currentDict ?
    [currentDict] :
    cookies.wantedDicts;

  console.log(wantedDicts);

  return (
    <div className={classes.container}>
      <CssBaseline />
      <SatniAppBar
        handleSearch={handleSearch}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth} />
      <SatniDrawer
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        handleSearch={handleSearch}
      />
      <main className={classes.main}>
        <Switch>
          <Redirect
            from={`/article/${currentLemma}`}
            to={`/${currentLemma}`} />
          <Redirect
            from={'/details'}
            to={`/${location_dict.lemma}`} />
          <Route path='/'>
            <Grid container>
              <Grid
                item
                xs={12}
              >
                {(currentLemma || searchExpression) ?
                  <StatusBar
                    wantedDicts={wantedDicts}
                    wantedLangs={cookies.wantedLangs}
                    currentLemma={currentLemma} /> :
                  <WelcomeHeader />
                }
              </Grid>
              <Grid item xs={4}>
                {searchExpression ?
                  <InfiniteStems
                    searchExpression={searchExpression}
                    wantedDicts={wantedDicts}
                    wantedLangs={cookies.wantedLangs}
                    currentDict={currentDict}
                  /> :
                  <SearchWelcome />
                }
              </Grid>
              <Grid item xs={8}>
                {currentLemma ?
                  <Articles
                    lemma={currentLemma}
                    wantedDicts={wantedDicts}
                    wantedLangs={cookies.wantedLangs}
                  /> :
                  <DictWelcome />
                }
              </Grid>
            </Grid>
          </Route>
        </Switch>
      </main>
    </div>
  );
};

AsyncApp.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AsyncApp);
