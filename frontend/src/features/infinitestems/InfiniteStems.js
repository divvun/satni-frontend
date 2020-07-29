import React from 'react';
import useStems from './InfiniteStems.hooks';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeList as List } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  infiniteList: {
    height: '80vh'
  }
}));

const InfiniteStems = ({lemmaHandler, searchExpression}) => {
  const {stems, loading, loadMore, hasNextPage} = useStems(searchExpression);
  const classes = useStyles();

  const stemsCount = hasNextPage ? stems.length + 1 : stems.length;
  const loadMoreStems = loading ? () => {} : loadMore;
  const isStemLoaded = index => !hasNextPage || index < stems.length;

  if (loading && stems.length === 0) return <CircularProgress size={16} />;

  return (

    <div className={classes.infiniteList}>
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
                    content = `${srclangs[0]} ${stem}`;
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
