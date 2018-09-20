import React from 'react';
import { Div} from 'glamorous';
import Example from './Example';

const Examples = ({examples}) => {
  return (
    <Div>{
      examples.map((example, i) => (
        <Example key={i} example={example} />)
      )
    }</Div>
  );
};

export default Examples;
