import React from 'react';

import MinimalParadigm from 'features/paradigm/MinimalParadigm';
import Stem from './Stem'

const LemmaGroup = ({stem}) => {
  return (
    <>
      <Stem stem={stem} />
    </>
  );
};

export default LemmaGroup;
