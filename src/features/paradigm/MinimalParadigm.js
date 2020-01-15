import React from 'react';

const MinimalParadigm = ({paradigm}) => (
  <div><a href=''>{Object.keys(paradigm).map(key => paradigm[key]).flat().join(', ')}</a></div>
);

export default MinimalParadigm;
