declare module "react-window" {
  import { Component, CSSProperties, ReactElement } from "react";

  export interface ListChildComponentProps {
    index: number;
    style: CSSProperties;
  }

  export interface FixedSizeListProps {
    children: (props: ListChildComponentProps) => ReactElement;
    className?: string;
    height: number | string;
    itemCount: number;
    itemSize: number;
    onItemsRendered?: (props: {
      overscanStartIndex: number;
      overscanStopIndex: number;
      visibleStartIndex: number;
      visibleStopIndex: number;
    }) => void;
    ref?: any;
    width: number | string;
  }

  export class FixedSizeList extends Component<FixedSizeListProps> {}
}

declare module "react-window-infinite-loader" {
  import { Component, ReactElement } from "react";

  export interface InfiniteLoaderProps {
    isItemLoaded: (index: number) => boolean;
    itemCount: number;
    loadMoreItems: (
      startIndex: number,
      stopIndex: number
    ) => Promise<void> | void;
    children: (props: {
      onItemsRendered: (props: {
        overscanStartIndex: number;
        overscanStopIndex: number;
        visibleStartIndex: number;
        visibleStopIndex: number;
      }) => void;
      ref: any;
    }) => ReactElement;
  }

  export default class InfiniteLoader extends Component<InfiniteLoaderProps> {}
}
