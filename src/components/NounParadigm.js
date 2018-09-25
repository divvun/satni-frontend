import React from 'react';
import { css } from 'react-emotion';

const CaseRow = ({wcase, value}) => {
  if (value instanceof Array) {
    return (
      <tr>
        <td>{wcase.replace('_both', '')}</td>
        <td className={css({colSpan: '2'})}>{value.map((word, i) => {
          return (
            <div key={i}>{word}</div>
          );
        })}</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{wcase}</td>
      {Object.keys(value).map((key, j) => {
        return (
          <td key={j}>{value[key].map((word, i) => {
            return (
              <div key={i}>{word}</div>
            );
          })}</td>
        );
      })}
    </tr>
  );
};

const NounParadigm = ({paradigm}) => {
  return (
    <table>
      <thead>
        <th>&nbsp;</th><th>Sg</th><th>Pl</th>
      </thead>
      <tbody>
        {Object.keys(paradigm).map((p, i) => {
          return <CaseRow key={p} wcase={p} value={paradigm[p]} />;
        })}
      </tbody>
    </table>
  );
};

export default NounParadigm;
