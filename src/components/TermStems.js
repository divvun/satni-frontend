import React from 'react';
import TermStem from './TermStem';
import { css } from 'react-emotion';

const langOrder = ['sme', 'smj', 'sma', 'smn', 'sms', 'nob', 'swe', 'fin', 'nno', 'eng', 'lat'];

const createLang = (lang, stems) => (
  stems.filter(stem => stem.lang === lang).map((stem, i) => (
    <TermStem key={i} stem={{...stem, key: i}} />
  )
));

const createTable = (stems) => {
  const table = [];
  for (const lang in langOrder) {
    const children = [];
    const thisLang = createLang(langOrder[lang], stems);
    if (thisLang.length > 0) {
      children.push(<td key='0'>{langOrder[lang]}</td>);
      children.push(<td key='1'>{thisLang}</td>);
    }
    if (children.length > 0) {
      table.push(<tr key={lang} className={css({verticalAlign: 'top'})}>{children}</tr>);
    }
  }
  return table;
};

const TermStems = ({stems}) => {
  return <table className={css({width: '100%'})}>
    <tbody>
      {createTable(stems)}
    </tbody>
  </table>;
};

export default TermStems;
