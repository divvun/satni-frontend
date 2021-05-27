import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import qs from 'qs';

import { locationParser } from '../utils';
import Articles from '../features/article/Articles';
import InfiniteStems from '../features/infinitestems/InfiniteStems';
import StatusBar from './StatusBar';
import FilterBar from '../features/search/FilterBar';
import { WelcomeHeader } from './Welcome';

const SatniMain = () => {
  const location = useLocation();
  const locationDict = qs.parse(location.search.slice(1));
  const { currentLemma } = locationParser(location.pathname);

  return (
    <Switch>
      <Redirect from={`/article/${currentLemma}`} to={`/${currentLemma}`} />
      <Redirect from="/details" to={`/${locationDict.lemma}`} />
      <Route path="/">
        <Grid container>
          <Grid item xs={12}>
            <StatusBar />
          </Grid>
          <Grid item xs={12}>
            <FilterBar />
            {!currentLemma && <WelcomeHeader />}
          </Grid>
          <Grid item xs={4}>
            <InfiniteStems />
          </Grid>
          <Grid item xs={8}>
            {currentLemma && <Articles lemma={currentLemma} />}
          </Grid>
        </Grid>
      </Route>
    </Switch>
  );
};

export default SatniMain;
