import React from 'react';
import { Trans } from '@lingui/macro';
import PropTypes from 'prop-types';

const SearchInfo = ({
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

SearchInfo.propTypes = {
  searchExpression: PropTypes.string.isRequired,
  totalCount: PropTypes.number.isRequired,
  stemsLength: PropTypes.number.isRequired,
  searchMode: PropTypes.string.isRequired,
};

export default SearchInfo;
