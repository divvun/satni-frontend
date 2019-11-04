import React from 'react';
import qs from 'qs';
import Korp from './Korp';
import Paradigm from './Paradigm';

const LemmaDetails = ({match, location}) => {
  const location_dict = qs.parse(location.search.slice(1));
  return (
    <div>
      <Paradigm lemma={location_dict.lemma} language={location_dict.lang} pos={location_dict.pos} />
      <Korp lemma={location_dict.lemma} language={location_dict.lang} />
    </div>
  );
};

export default LemmaDetails;
