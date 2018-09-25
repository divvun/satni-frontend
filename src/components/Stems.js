import React from 'react';
import Stem from './Stem';

const Stems = ({stems}) => {
  return (
    <div>{
      stems.map((stem, i) => (
        <Stem key={i} stem={{...stem, key: i}} />)
      )
    }</div>
  );
};

export default Stems;
