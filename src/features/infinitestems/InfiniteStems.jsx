import { useQuery } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import * as Sentry from '@sentry/react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import Truncate from 'react-truncate';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import setSearchListClickedItem from '../../operations/mutations/setSearchListClickedItem';
import GET_SEARCH_LIST_CLICKED_ITEM from '../../operations/queries/getSearchListClickedItem';
import GET_SEARCH_MODE from '../../operations/queries/getSearchMode';
import { locationParser } from '../../utils';
import useStems from './InfiniteStems.hooks';
import SearchInfo from './SearchInfo';

const useStyles = makeStyles(() => ({
  infiniteList: {
    height: '72vh',
  },
  status: {
    textAlign: 'center',
  },
  clicked: {
    fontWeight: 'bold',
  },
}));

const InfiniteStems = ({ searchExpression }) => {
  const searchModeQueryResult = useQuery(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data;
  const { stems, loading, loadMore, hasNextPage, totalCount } =
    useStems(searchExpression);
  const searchListClickedItemQuery = useQuery(GET_SEARCH_LIST_CLICKED_ITEM);
  const { searchListClickedItem } = searchListClickedItemQuery.data;
  const classes = useStyles();

  const stemsCount = hasNextPage ? stems.length + 1 : stems.length;
  const loadMoreStems = loading ? () => {} : loadMore;
  const isStemLoaded = (index) => !hasNextPage || index < stems.length;

  const { currentLemma, currentDict } = locationParser(useLocation().pathname);
  if (loading && stems.length === 0) return <CircularProgress size={16} />;

  return (
    <div className={classes.infiniteList}>
      {searchExpression && (
        <Typography className={classes.status}>
          <SearchInfo
            stemsLength={stems.length}
            totalCount={totalCount}
            searchExpression={searchExpression}
            searchMode={searchMode}
          />
        </Typography>
      )}
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
                    stem === searchListClickedItem ? (
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
                        onClick={() => setSearchListClickedItem(stem)}
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
};

export default InfiniteStems;
