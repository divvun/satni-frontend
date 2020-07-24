import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import useStems from './InfiniteStems.hooks'
import { useCookies } from 'react-cookie';
import {gql} from 'apollo-boost';
import { Trans } from '@lingui/macro';
import AutoSizer from 'react-virtualized-auto-sizer';
import InfiniteLoader from 'react-window-infinite-loader'
import { FixedSizeList as List } from 'react-window'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  infiniteList: {
    flexGrow: 1,
    minHeight: 500,
    maxWidth: 400
  }
}))

const redirect = (stem) => <Redirect to={`/article/${stem.stem}`} push />

const InfiniteStems = () => {
  const {stems, loading, error, loadMore, hasNextPage} = useStems('gu')
  const classes = useStyles();

  const stemsCount = hasNextPage ? stems.length + 1 : stems.length;
  const loadMoreStems = loading ? () => {} : loadMore;
  const isStemLoaded = index => !hasNextPage || index < stems.length;

  if (loading && stems.length === 0) return <p>Loading ...</p>

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
                  content = 'Loading...';
                  return (
                    <ListItem button key={index} style={style}>
                      <ListItemText primary={content}/>
                    </ListItem>
                  )
                } else {
                  const {stem, srclangs} = stems[index]
                  content = `${srclangs[0]} ${stem}`;
                  return (
                    <ListItem button key={index} style={style} component='a' href={`/article/${stem}`}>
                      <ListItemText primary={content}/>
                    </ListItem>
                  )
                }
              }}
            </List>
          )}
        </InfiniteLoader>
      )}
      </AutoSizer>
    </div>
  );
}

export default InfiniteStems
