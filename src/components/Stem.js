import React from 'react';
import { css } from 'react-emotion';

const Stem = ({ stem: {lemma, pos, lang, key, re}}) => {
  return (
    <div
      className={css({
        width: '100%',
        key: key
      })}>
      <span className={css({ display: 'inline'})}>{key ? <span className={css({
        fontWeight: 'bold',
        marginLeft: '2%'
      })}>{lemma}</span> : lemma} {re} ({pos}) {lang}</span>
    </div>
  );
};

export default Stem;
