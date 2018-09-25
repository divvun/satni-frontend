import React from 'react';
import { css } from "react-emotion";

const Example = ({example}) => {
  return (
    <div className={css({
      paddingTop: '3%',
      paddingLeft: '2%'
    })}>
      <div>{example.x}</div>
      <div className={css({fontStyle: 'italic'})}>{example.xt}</div>
    </div>
  );
};

export default Example;
