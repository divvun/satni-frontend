import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import qs from 'qs';

import { locationParser } from '../utils';
import Articles from '../features/article/Articles';
import { WelcomeHeader } from './Welcome';
import InfiniteStems from '../features/infinitestems/InfiniteStems';
import StatusBar from './StatusBar';

export const GET_LANGS_AND_DICTS = gql`
  query GetLangsAndDicts {
    wantedDicts @client
    wantedLangs @client
  }
`;

const SatniMain = ({ searchExpression }) => {
  const location = useLocation();
  const locationDict = qs.parse(location.search.slice(1));
  const { data, error, loading } = useQuery(GET_LANGS_AND_DICTS);
  const { currentLemma, currentDict } = locationParser(location.pathname);

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
    <Switch>
      <Redirect from={`/article/${currentLemma}`} to={`/${currentLemma}`} />
      <Redirect from="/details" to={`/${locationDict.lemma}`} />
      <Route path="/">
        <Grid container>
          <Grid item xs={12}>
            {currentLemma || searchExpression ? (
              <StatusBar
                wantedDicts={wantedDicts}
                wantedLangs={data.wantedLangs}
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
                wantedLangs={data.wantedLangs}
                currentDict={currentDict}
              />
            )}
          </Grid>
          <Grid item xs={8}>
            {currentLemma && (
              <Articles
                lemma={currentLemma}
                wantedDicts={wantedDicts}
                wantedLangs={data.wantedLangs}
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
};

export default SatniMain;
