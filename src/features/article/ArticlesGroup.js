import React from 'react';
import Articles from './Articles';
import PropTypes from 'prop-types';

const ArticlesGroup = ({lemmas, wantedDicts, wantedLangs}) => (
  <>
    {lemmas.map(lemma => <Articles
      key={lemma}
      lemma={lemma}
      wantedDicts={wantedDicts}
      wantedLangs={wantedLangs}/>
    )}
  </>
);

ArticlesGroup.propTypes = {
  lemmas: PropTypes.array.isRequired,
  wantedDicts: PropTypes.array.isRequired,
  wantedLangs: PropTypes.array.isRequired
};

export default ArticlesGroup;
