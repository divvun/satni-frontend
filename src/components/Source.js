import React from 'react';
import { css } from 'react-emotion';
import { langName } from '../langThings';

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

const Source = ({source}) => {
  return (
    <div className={css({
      textAlign: 'center',
      fontSize: '110%'
    })}>Source: {langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</div>
  );
};

export default Source;
