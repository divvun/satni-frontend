import React from 'react';
import { css } from 'react-emotion';
import { langName } from '../langThings';

const SourceLink = ({from, to, lemma, source}) => {
  if (['nobsme', 'smenob', 'finsme', 'smefin'].includes(source)) {
    return <a
      href={`https://sanit.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>Source</a>;
  } else if (['smanob', 'nobsma'].includes(source)) {
    return <a
      href={`https://baakoeh.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>Source</a>;
  } else if (['smnfin', 'finsmn', 'smesmn', 'smnsme'].includes(source)) {
    return <a
      href={`https://saanih.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>Source</a>;
  } else if (['smsfin', 'finsms'].includes(source)) {
    return <a
      href={`https://saan.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>Source</a>;
  } else {
    return 'Source';
  }
};

const names = {
  smenob: {
    name: 'Neahttadigisánit',
    from: 'sme',
    to: 'nob'
  },
  smesmn: {
    name: 'Neahttadigisánit',
    from: 'sme',
    to: 'smn'
  },
  nobsme: {
    name: 'Neahttadigisánit',
    from: 'nob',
    to: 'sme'
  },
  smefin: {
    name: 'Neahttadigisánit',
    from: 'sme',
    to: 'fin'
  },
  finsme: {
    name: 'Neahttadigisánit',
    from: 'fin',
    to: 'sme'
  },
  smsfin: {
    name: 'Neahttadigisánit',
    from: 'sms',
    to: 'fin'
  },
  finsms: {
    name: 'Neahttadigisánit',
    from: 'fin',
    to: 'sms'
  },
  smanob: {
    name: 'Nedtedigibaahkoeh',
    from: 'sma',
    to: 'nob'
  },
  nobsma: {
    name: 'Nedtedigibaahkoeh',
    from: 'nob',
    to: 'sma'
  },
  smnfin: {
    name: 'Nettidigsäänih',
    from: 'smn',
    to: 'fin'
  },
  smnsme: {
    name: 'Nettidigsäänih',
    from: 'smn',
    to: 'sme'
  },
  finsmn: {
    name: 'Nettidigsäänih',
    from: 'fin',
    to: 'smn'
  }
};

const Source = ({source, lemma}) => {
  return (
    <div className={css({
      textAlign: 'center',
      fontSize: '110%'
    })}>
      <SourceLink from={names[source]['from']} to={names[source]['to']} lemma={lemma} source={source} />: {langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</div>
  );
};

export default Source;
