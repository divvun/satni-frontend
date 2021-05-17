import React, { useState } from 'react';
import * as Sentry from '@sentry/react';
import { useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';
import { Link, useLocation } from 'react-router-dom';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import Truncate from 'react-truncate';
import Typography from '@material-ui/core/Typography';

import useStems from './InfiniteStems.hooks';
import SearchInfo from './SearchInfo';
import { locationParser } from '../../utils';
import GET_SEARCH_MODE from '../../operations/queries/getSearchMode';

const useStyles = makeStyles(() => ({
  infiniteList: {
    height: '80vh',
  },
  status: {
    textAlign: 'center',
  },
  clicked: {
    fontWeight: 'bold',
  },
}));

const InfiniteStems = ({ searchExpression, wantedDicts, wantedLangs }) => {
  const searchModeQueryResult = useQuery(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data;
  const { stems, loading, loadMore, hasNextPage, totalCount } = useStems(
    searchExpression,
    wantedDicts,
    wantedLangs,
  );
  const classes = useStyles();
  const [clickedItem, setClickedItem] = useState(-1);

  const stemsCount = hasNextPage ? stems.length + 1 : stems.length;
  const loadMoreStems = loading ? () => {} : loadMore;
  const isStemLoaded = (index) => !hasNextPage || index < stems.length;

  const { currentLemma, currentDict } = locationParser(useLocation().pathname);
  if (loading && stems.length === 0) return <CircularProgress size={16} />;

  return (
    <div className={classes.infiniteList}>
      <Typography className={classes.status}>
        <SearchInfo
          stemsLength={stems.length}
          totalCount={totalCount}
          searchExpression={searchExpression}
          searchMode={searchMode}
        />
      </Typography>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            isItemLoaded={isStemLoaded}
            itemCount={stemsCount}
            loadMoreItems={loadMoreStems}
          >
            {({ onItemsRendered, ref }) => (
              <List
                height={height}
                itemCount={stemsCount}
                itemSize={20}
                onItemsRendered={onItemsRendered}
                ref={ref}
                width={width}
              >
                {({ index, style }) => {
                  if (!isStemLoaded(index)) {
                    return (
                      <ListItem button key={index} style={style}>
                        <CircularProgress size={16} />
                      </ListItem>
                    );
                  }

                  const { stem } = stems[index];
                  const truncStem = (
                    <Truncate width={width - 50}>{stem}</Truncate>
                  );
                  const stemNode =
                    stem === clickedItem ? (
                      <Typography component="span" className={classes.clicked}>
                        {truncStem}
                      </Typography>
                    ) : (
                      <Typography component="span">{truncStem}</Typography>
                    );

                  const path =
                    currentDict && !currentLemma
                      ? `${currentDict}/${stem}`
                      : stem;
                  return (
                    <Sentry.ErrorBoundary>
                      <ListItem
                        key={index}
                        style={style}
                        onClick={() => setClickedItem(stem)}
                      >
                        <ListItemText
                          primary={<Link to={path}>{stemNode}</Link>}
                        />
                      </ListItem>
                    </Sentry.ErrorBoundary>
                  );
                }}
              </List>
            )}
          </InfiniteLoader>
        )}
      </AutoSizer>
    </div>
  );
};

InfiniteStems.propTypes = {
  searchExpression: PropTypes.string.isRequired,
  wantedDicts: PropTypes.arrayOf(PropTypes.string).isRequired,
  wantedLangs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InfiniteStems;
