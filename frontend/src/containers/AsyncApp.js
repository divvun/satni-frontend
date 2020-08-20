import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import { hasAvailableDict, pathname2Dict } from 'utils';
import { SearchWelcome, DictWelcome} from 'containers/Welcome';
import Articles from 'features/article/Articles';
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
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth
    },
    marginTop: theme.spacing(1)
  }
});

const AsyncApp = ({classes, match, language, onLanguageChange}) => {
  const [currentLemma, setCurrentLemma] = useState('');
  const [searchExpression, setSearchExpression] = useState('');

  const handleLemma = lemma => setCurrentLemma(lemma);
  const handleSearch = value => setSearchExpression(value);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const pathname = useLocation().pathname;

  const [cookies] = useCookies(['wantedLangs', 'wantedDicts']);

  const wantedDicts = hasAvailableDict(pathname) ?
    pathname2Dict(pathname) :
    cookies.wantedDicts;

  return (
    <div className={classes.container}>
      <CssBaseline />
      <SatniAppBar
        handleSearch={handleSearch}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth} />
      <SatniDrawer
        drawerWidth={drawerWidth}
        language={language}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        onLanguageChange={onLanguageChange}
      />
      <main className={classes.main}>
        <Grid container>
          <Grid
            item
            xs={12}
          >
            <StatusBar
              wantedDicts={wantedDicts}
              wantedLangs={cookies.wantedLangs} />
          </Grid>
          <Grid item xs={4}>
            {searchExpression ?
              <InfiniteStems
                searchExpression={searchExpression}
                lemmaHandler={handleLemma}
                wantedDicts={wantedDicts}
                wantedLangs={cookies.wantedLangs}
              /> :
              <SearchWelcome />
            }
          </Grid>
          <Grid item xs={8}>
            {currentLemma ?
              <Articles
                lemma={currentLemma}
                lemmaHandler={handleLemma}
                wantedDicts={wantedDicts}
                wantedLangs={cookies.wantedLangs}
              /> :
              <DictWelcome />
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
