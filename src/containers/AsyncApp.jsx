import React from 'react';
import * as Sentry from '@sentry/react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

import SatniAppBar from './SatniAppBar';
import SatniDrawer from './SatniDrawer';
import SatniMain from './SatniMain';

const drawerWidth = 240;

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

const AsyncApp = ({ classes }) => {
  const [searchExpression, setSearchExpression] = React.useState('');
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.container}>
      <CssBaseline />
      <SatniAppBar
        setSearchExpression={setSearchExpression}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <SatniDrawer
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <main className={classes.main}>
        <Sentry.ErrorBoundary
          fallback={({ error, resetError }) => (
            <>
              <div>You have encountered an error</div>
              <div>{error.toString()}</div>
              <Button
                color="primary"
                href="/"
                onClick={() => {
                  resetError();
                }}
              >
                Click here to reset!
              </Button>
            </>
          )}
        >
          <SatniMain
            searchExpression={searchExpression}
            setSearchExpression={setSearchExpression}
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
