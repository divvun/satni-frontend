import React from 'react';
import TermStem from './TermStem';
import { css } from 'react-emotion';

const langOrder = ['sme', 'smj', 'sma', 'smn', 'sms', 'nob', 'swe', 'fin', 'nno', 'eng', 'lat'];
const langName = {
  'sme': 'North Sami',
  'smj': 'Lule Sami',
  'sma': 'South Sami',
  'smn': 'Inari Sami',
  'sms': 'Skolt Sami',
  'nob': 'Norwegian',
  'swe': 'Swedish',
  'fin': 'Finnish',
  'nno': 'Nynorsk',
  'eng': 'English',
  'lat': 'Latin'
};

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
      children.push(<td key='0'>{langName[langOrder[lang]]}</td>);
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
    <thead>
      <tr>
        <th>Language</th>
        <th>Expression</th>
      </tr>
    </thead>
    <tbody>
      {createTable(stems)}
    </tbody>
  </table>;
};

export default TermStems;
