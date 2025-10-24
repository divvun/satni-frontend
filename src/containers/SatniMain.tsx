import React from 'react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Grid from '@mui/material/Grid';
import qs from 'qs';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Articles from '../features/article/Articles';
import InfiniteStems from '../features/infinitestems/InfiniteStems';
import FilterBar from '../features/search/FilterBar';
import { locationParser } from '../utils';
import StatusBar from './StatusBar';
import { WelcomeHeader } from './Welcome';

interface SatniMainProps {
  searchExpression: string;
  setSearchExpression: (expression: string) => void;
}

const SatniMain: React.FC<SatniMainProps> = ({
  searchExpression,
  setSearchExpression,
}) => {
  const location = useLocation();
  const locationDict = qs.parse(location.search.slice(1));
  const { currentLemma } = locationParser(location.pathname);

  return (
    // @ts-ignore - React Router DOM v5 compatibility
    <Switch>
      {/* @ts-ignore - React Router DOM v5 compatibility */}
      <Redirect from={`/article/${currentLemma}`} to={`/${currentLemma}`} />
      {/* @ts-ignore - React Router DOM v5 compatibility */}
      <Redirect from="/details" to={`/${locationDict.lemma}`} />
      {/* @ts-ignore - React Router DOM v5 compatibility */}
      <Route path="/">
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Grid container>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <Grid xs={12}>
            <StatusBar />
          </Grid>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <Grid xs={12}>
            <FilterBar
              searchExpression={searchExpression}
              setSearchExpression={setSearchExpression}
            />
            {!currentLemma && !searchExpression && <WelcomeHeader />}
          </Grid>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <Grid xs={4}>
            <InfiniteStems searchExpression={searchExpression} />
          </Grid>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <Grid xs={8}>
            {currentLemma && <Articles lemma={currentLemma} />}
          </Grid>
        </Grid>
      </Route>
    </Switch>
  );
};

export default SatniMain;
