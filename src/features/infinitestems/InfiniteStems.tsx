import { useQuery } from "@apollo/client/react";
import CircularProgress from "@mui/material/CircularProgress";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import * as Sentry from "@sentry/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList as List } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import setSearchListClickedItem from "../../operations/mutations/setSearchListClickedItem";
import { GET_SEARCH_LIST_CLICKED_ITEM } from "../../operations/queries/getSearchListClickedItem";
import { GET_SEARCH_MODE } from "../../operations/queries/getSearchMode";
import { locationParser } from "../../utils";
import useStems from "./InfiniteStems.hooks";
import SearchInfo from "./SearchInfo";

interface InfiniteStemsProps {
  searchExpression: string;
}

const InfiniteStems: React.FC<InfiniteStemsProps> = ({ searchExpression }) => {
  const searchModeQueryResult = useQuery(GET_SEARCH_MODE, {});
  const { searchMode = "start" } = searchModeQueryResult.data || {};
  const { stems, loading, loadMore, hasNextPage, totalCount } =
    useStems(searchExpression);
  const searchListClickedItemQuery = useQuery(GET_SEARCH_LIST_CLICKED_ITEM, {});
  const { searchListClickedItem = -1 } = searchListClickedItemQuery.data || {};

  const stemsCount = hasNextPage ? stems.length + 1 : stems.length;
  const loadMoreStems = loading
    ? (_startIndex: number, _stopIndex: number) => {}
    : (_startIndex: number, _stopIndex: number) => {
        loadMore && loadMore();
      };
  const isStemLoaded = (index: number) => !hasNextPage || index < stems.length;

  const { currentLemma, currentDict } = locationParser(useLocation().pathname);
  if (loading && stems.length === 0) return <CircularProgress size={16} />;

  return (
    <div style={{ height: "72vh" }}>
      {searchExpression && (
        <Typography sx={{ textAlign: "center" }}>
          <SearchInfo
            stemsLength={stems.length}
            totalCount={totalCount ?? 0}
            searchExpression={searchExpression}
            searchMode={searchMode}
          />
        </Typography>
      )}
      <AutoSizer>
        {({ height, width }: { height?: number; width?: number }) => (
          <InfiniteLoader
            isItemLoaded={isStemLoaded}
            itemCount={stemsCount}
            loadMoreItems={loadMoreStems}
          >
            {({ onItemsRendered, ref }: any) => (
              <List
                height={height ?? 500}
                itemCount={stemsCount}
                itemSize={20}
                onItemsRendered={onItemsRendered}
                ref={ref}
                width={width ?? 300}
              >
                {({
                  index,
                  style,
                }: {
                  index: number;
                  style: React.CSSProperties;
                }) => {
                  if (!isStemLoaded(index)) {
                    return (
                      <ListItemButton key={index} style={style}>
                        <CircularProgress size={16} />
                      </ListItemButton>
                    );
                  }

                  const { stem } = stems[index];
                  const stemValue = stem ?? "";
                  const truncStem = (
                    <span
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {stemValue}
                    </span>
                  );

                  // Highlight if this is the currently viewed lemma or the clicked item
                  const isCurrentItem =
                    index === searchListClickedItem ||
                    stemValue === currentLemma;

                  const stemNode = isCurrentItem ? (
                    <Typography component="span" sx={{ fontWeight: "bold" }}>
                      {truncStem}
                    </Typography>
                  ) : (
                    <Typography component="span">{truncStem}</Typography>
                  );

                  const path =
                    currentDict && !currentLemma
                      ? `${currentDict}/${stemValue}`
                      : stemValue;
                  return (
                    <Sentry.ErrorBoundary>
                      <ListItem
                        key={index}
                        style={style}
                        onClick={() => setSearchListClickedItem(index)}
                        sx={{
                          bgcolor: isCurrentItem
                            ? "action.selected"
                            : "transparent",
                        }}
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

export default InfiniteStems;
