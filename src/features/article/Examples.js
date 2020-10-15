import React from 'react';
import PropTypes from 'prop-types';

import Example from './Example';

const Examples = ({examples}) => (
  <>
    {examples.map((example, i) => (
      <Example key={i} example={example} />)
    )}
  </>
);

Examples.propTypes = {
  examples: PropTypes.object.isRequired
};

export default Examples;
