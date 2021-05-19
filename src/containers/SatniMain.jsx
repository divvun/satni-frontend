import React from 'react';
import { useQuery } from '@apollo/client';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import qs from 'qs';

import { locationParser } from '../utils';
import Articles from '../features/article/Articles';
import InfiniteStems from '../features/infinitestems/InfiniteStems';
import StatusBar from './StatusBar';
import FilterBar from '../features/search/FilterBar';
import { WelcomeHeader } from './Welcome';
import GET_LANGS_DICTS from '../operations/queries/getLangsDicts';
import GET_SEARCH_MODE from '../operations/queries/getSearchMode';

const SatniMain = ({ searchExpression, searchHandler }) => {
  const searchModeQueryResult = useQuery(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data;
  const location = useLocation();
  const locationDict = qs.parse(location.search.slice(1));
  const langsDictsQueryResult = useQuery(GET_LANGS_DICTS);
  const { currentLemma, currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  return (
    <Switch>
      <Redirect from={`/article/${currentLemma}`} to={`/${currentLemma}`} />
      <Redirect from="/details" to={`/${locationDict.lemma}`} />
      <Route path="/">
        <Grid container>
          <Grid item xs={12}>
            <StatusBar
              wantedDicts={wantedDicts}
              wantedLangs={langsDictsQueryResult.data.wantedLangs}
              currentLemma={currentLemma}
            />
          </Grid>
          <Grid item xs={12}>
            <FilterBar searchHandler={searchHandler} />
            {!currentLemma && <WelcomeHeader />}
          </Grid>
          <Grid item xs={4}>
            {searchExpression && (
              <InfiniteStems
                searchExpression={searchExpression}
                wantedDicts={wantedDicts}
                wantedLangs={langsDictsQueryResult.data.wantedLangs}
                currentDict={currentDict}
                searchMode={searchMode}
              />
            )}
          </Grid>
          <Grid item xs={8}>
            {currentLemma && (
              <Articles
                lemma={currentLemma}
                wantedDicts={wantedDicts}
                wantedLangs={langsDictsQueryResult.data.wantedLangs}
              />
            )}
          </Grid>
        </Grid>
      </Route>
    </Switch>
  );
};

SatniMain.propTypes = {
  searchExpression: PropTypes.string.isRequired,
  searchHandler: PropTypes.func.isRequired,
};

export default SatniMain;
