/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import Example from './Example';

const Examples = ({ examples, language }) => (
  <>
    {examples.map((example, i) => (
      <Example key={i} example={example} language={language} />
    ))}
  </>
);

Examples.propTypes = {
  examples: PropTypes.arrayOf.isRequired,
  language: PropTypes.string.isRequired,
};

export default Examples;
