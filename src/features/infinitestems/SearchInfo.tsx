import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/react/macro';

interface SearchInfoProps {
  stemsLength: number;
  totalCount: number;
  searchExpression: string;
  searchMode: string;
}

const SearchInfo: React.FC<SearchInfoProps> = ({
  stemsLength,
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

  if (searchMode === 'start') {
    return (
      <Trans>
        {stemsLength}/{totalCount} starting with <b>{searchExpression}</b>
      </Trans>
    );
  }

  if (searchMode === 'middle') {
    return (
      <Trans>
        {stemsLength}/{totalCount} containing <b>{searchExpression}</b>
      </Trans>
    );
  }

  return (
    <Trans>
      {stemsLength}/{totalCount} ending in <b>{searchExpression}</b>
    </Trans>
  );
};

export default SearchInfo;
