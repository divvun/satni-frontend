import React from 'react';

import MinimalParadigm from 'features/paradigm/MinimalParadigm';
import Stem from './Stem'

const LemmaGroup = ({stem, paradigm}) => {
  return (
    <>
      <Stem stem={stem} />
      <MinimalParadigm paradigm={paradigm} />
    </>
  );
};

export default LemmaGroup;
