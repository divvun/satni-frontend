import React from 'react';

const TermStem = ({ stem: {lemma, pos, lang, key}}) => {
  return (
    <div>
      <a href={`/details?lemma=${lemma}&lang=${lang}&pos=${pos}`}>{lemma} ({pos})</a>
    </div>
  );
};

export default TermStem;
