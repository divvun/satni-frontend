import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FixedSizeList as List } from 'react-window';
import { Link, useLocation } from 'react-router-dom';
import { Trans } from '@lingui/macro';

import useStems from './InfiniteStems.hooks';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

import { locationParser } from 'utils';

const useStyles = makeStyles(theme => ({
  infiniteList: {
    height: '80vh'
  },
  status: {
    textAlign: 'center'
  },
  clicked: {
    fontWeight: 'bold'
  }
}));

const InfiniteStems = (props) => {
  const {searchExpression, wantedDicts, wantedLangs} = props;
  const {stems, loading, loadMore, hasNextPage, totalCount} = useStems(
    searchExpression, wantedDicts, wantedLangs);
  const classes = useStyles();
  const [clickedItem, setClickedItem] = useState(-1);

  const stemsCount = hasNextPage ? stems.length + 1 : stems.length;
  const loadMoreStems = loading ? () => {} : loadMore;
  const isStemLoaded = index => !hasNextPage || index < stems.length;

  const {currentLemma, currentDict} = locationParser(useLocation().pathname);
  if (loading && stems.length === 0) return <CircularProgress size={16} />;

  return (
    <div className={classes.infiniteList}>
      <Typography className={classes.status}>
        {totalCount ?
          <Trans>
            {stems.length}/{totalCount} starting with <b>{searchExpression}</b>
          </Trans> :
          <Trans>
            No results for <b>{searchExpression}</b>
          </Trans>
        }
      </Typography>
      <AutoSizer>
        {({height, width}) => (
          <InfiniteLoader
            isItemLoaded={isStemLoaded}
            itemCount={stemsCount}
            loadMoreItems={loadMoreStems}>
            {({onItemsRendered, ref}) => (
              <List
                height={height}
                itemCount={stemsCount}
                itemSize={20}
                onItemsRendered={onItemsRendered}
                ref={ref}
                width={width}>
                {({index, style}) => {
                  if (!isStemLoaded(index)) {
                    return (
                      <ListItem button key={index} style={style}>
                        <CircularProgress size={16} />
                      </ListItem>
                    );
                  }

                  const {stem} = stems[index];
                  const stemNode = stem === clickedItem ? <Typography component='span' className={classes.clicked}>{stem}</Typography> : <Typography component='span'>{stem}</Typography>;

                  const path = (currentDict && !currentLemma) ? `${currentDict}/${stem}` : stem;
                  return (
                    <ListItem
                      key={index}
                      style={style}
                      onClick={() => setClickedItem(stem)}
                    >
                      <ListItemText primary=<Link to={path}>{stemNode}</Link> />
                    </ListItem>
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

export default InfiniteStems;
