/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

import Example from './Example';

const Examples = ({ examples, sourceLanguage, targetLanguage }) => (
  <>
    {examples.map((example, i) => (
      <Example
        key={i}
        example={example}
        sourceLanguage={sourceLanguage}
        targetLanguage={targetLanguage}
      />
    ))}
  </>
);

Examples.propTypes = {
  examples: PropTypes.arrayOf.isRequired,
  sourceLanguage: PropTypes.string.isRequired,
  targetLanguage: PropTypes.string.isRequired,
};

export default Examples;
