/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import Example from './Example';

const Examples = ({ examples }) => (
  <>
    {examples.map((example, i) => (
      <Example key={i} example={example} />
    ))}
  </>
);

Examples.propTypes = {
  examples: PropTypes.arrayOf.isRequired,
};

export default Examples;
