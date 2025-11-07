import React from "react";
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from "@lingui/react/macro";

interface SearchInfoProps {
  totalCount: number;
  searchExpression: string;
  searchMode: string;
}

const SearchInfo: React.FC<SearchInfoProps> = ({
  totalCount,
  searchExpression,
  searchMode,
}) => {
  if (!totalCount) {
    return (
      <Trans>
        No results for <b>{searchExpression}</b>
      </Trans>
    );
  }

  if (searchMode === "start") {
    return (
      <Trans>
        {totalCount} starting with <b>{searchExpression}</b>
      </Trans>
    );
  }

  if (searchMode === "middle") {
    return (
      <Trans>
        {totalCount} containing <b>{searchExpression}</b>
      </Trans>
    );
  }

  return (
    <Trans>
      {totalCount} ending in <b>{searchExpression}</b>
    </Trans>
  );
};

export default SearchInfo;
