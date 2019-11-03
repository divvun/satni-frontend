import React from 'react';

import Korp from './Korp';

const LemmaDetails = ({lemma, language, pos}) => (
  <div>
    <span>{lemma} {pos} {language}</span>
    <Korp lemma={lemma} language={language} />
  </div>
);

export default LemmaDetails;
