import React from 'react';
import { css } from 'react-emotion';

const names = {
  'smenob': 'Neahttadigisánit',
  'smesmn': 'Neahttadigisánit',
  'nobsme': 'Neahttadigisánit',
  'smefin': 'Neahttadigisánit',
  'finsme': 'Neahttadigisánit',
  'smsfin': 'Neahttadigisánit',
  'finsms': 'Neahttadigisánit',
  'smanob': 'Nedtedigibaahkoeh',
  'nobsma': 'Nedtedigibaahkoeh',
  'smnfin': 'Nettidigsäänih',
  'smnsme': 'Nettidigsäänih',
  'finsmn': 'Nettidigsäänih'
};

const Source = ({source}) => {
  return (
    <div className={css({
      textAlign: 'right',
      marginTop: '1%',
      paddingBottom: '0',
      fontSize: '90%'
    })}>Source: {names[source]} {source}</div>
  );
};

export default Source;
