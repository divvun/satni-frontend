import React from 'react';
import useStems from './InfiniteStems.hooks';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList as List } from 'react-window';
import { Trans } from '@lingui/macro';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  infiniteList: {
    height: '80vh'
  },
  status: {
    textAlign: 'center'
  }
}));

const InfiniteStems = ({lemmaHandler, searchExpression}) => {
  const {stems, loading, loadMore, hasNextPage, totalCount} = useStems(searchExpression);
  const classes = useStyles();

  const stemsCount = hasNextPage ? stems.length + 1 : stems.length;
  const loadMoreStems = loading ? () => {} : loadMore;
  const isStemLoaded = index => !hasNextPage || index < stems.length;

  if (loading && stems.length === 0) return <CircularProgress size={16} />;

  return (

    <div className={classes.infiniteList}>
      <Typography className={classes.status}>
        {totalCount ?
          <Trans>
            {stems.length} of totally {totalCount} starting with <b>{searchExpression}</b>
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
                  let content;
                  if (!isStemLoaded(index)) {
                    return (
                      <ListItem button key={index} style={style}>
                        <CircularProgress size={16} />
                      </ListItem>
                    );
                  } else {
                    const {stem, srclangs} = stems[index];
                    content = `${stem}`;
                    return (
                      <ListItem
                        button
                        value={stem}
                        key={index}
                        style={style}
                        onClick={() => lemmaHandler(stem)}>
                        <ListItemText primary={content} />
                      </ListItem>
                    );
                  }
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
