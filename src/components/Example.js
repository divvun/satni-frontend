import React from 'react';
import { Div} from 'glamorous';

const Example = ({example}) => {
  return (
    <Div css={{ paddingTop: '3%', paddingLeft: '2%'}}>
      <Div>{example.x}</Div>
      <Div css={{fontStyle: 'italic'}}>{example.xt}</Div>
    </Div>
  );
};

export default Example;
