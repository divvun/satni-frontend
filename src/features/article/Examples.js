import React from 'react';

import Example from './Example';

const Examples = ({examples}) => (
  <>
    {examples.map((example, i) => (
      <Example key={i} example={example} />)
    )}
  </>
);

export default Examples;
