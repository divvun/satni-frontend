import React from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import qs from 'qs';

import { locationParser } from '../utils';
import Articles from '../features/article/Articles';
import InfiniteStems from '../features/infinitestems/InfiniteStems';
import FilterBar from '../features/search/FilterBar';

const SatniMain = ({ searchExpression, setSearchExpression }) => {
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
            <FilterBar
              searchExpression={searchExpression}
              setSearchExpression={setSearchExpression}
            />
          </Grid>
          <Grid item xs={4}>
            <InfiniteStems searchExpression={searchExpression} />
          </Grid>
          <Grid item xs={8}>
            {currentLemma && <Articles lemma={currentLemma} />}
          </Grid>
        </Grid>
      </Route>
    </Switch>
  );
};

SatniMain.propTypes = {
  searchExpression: PropTypes.string.isRequired,
  setSearchExpression: PropTypes.func.isRequired,
};

export default SatniMain;
