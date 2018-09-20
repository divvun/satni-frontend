import React from 'react';
import { Div} from 'glamorous';
import Stem from './Stem';

const Stems = ({stems}) => {
  return (
    <Div>{
      stems.map((stem, i) => (
        <Stem key={i} stem={{...stem, key: i}} />)
      )
    }</Div>
  );
};

export default Stems;
