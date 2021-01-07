import React from 'react';
import Example from './Example';

const Examples = ({examples}) => {
  return (
    <div>{
      examples.map((example, i) => (
        <Example key={i} example={example} />)
      )
    }</div>
  );
};

export default Examples;
