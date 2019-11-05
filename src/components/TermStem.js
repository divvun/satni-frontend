import React from 'react';
import { Link } from 'react-router-dom';

const TermStem = ({ stem: {lemma, pos, lang, key}}) => {
  return (
    <div>
      <Link to={`/details?lemma=${lemma}&lang=${lang}&pos=${pos}`}>{lemma} ({pos})</Link>
    </div>
  );
};

export default TermStem;
