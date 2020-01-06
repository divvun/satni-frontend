import React from 'react';
import qs from 'qs';
import Korp from './Korp';
import Paradigm from 'features/paradigm/Paradigm';
import { ArticleDiv } from '../components';

const LemmaDetails = ({match, location}) => {
  const location_dict = qs.parse(location.search.slice(1));
  return (
    <ArticleDiv>
      <Korp lemma={location_dict.lemma} language={location_dict.lang} />
      <Paradigm lemma={location_dict.lemma} language={location_dict.lang} pos={location_dict.pos} />
    </ArticleDiv>
  );
};

export default LemmaDetails;
