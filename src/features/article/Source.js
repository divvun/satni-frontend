import React from 'react';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { langName } from 'langThings';

const SourceLink = ({from, to, lemma, source}) => {
  if (['nobsme', 'smenob', 'finsme', 'smefin'].includes(source)) {
    return <Link
      href={`https://sanit.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>{langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</Link>;
  } else if (['smanob', 'nobsma'].includes(source)) {
    return <Link
      href={`https://baakoeh.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>{langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</Link>;
  } else if (['smnfin', 'finsmn', 'smesmn', 'smnsme'].includes(source)) {
    return <Link
      href={`https://saanih.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>{langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</Link>;
  } else if (['smsfin', 'finsms'].includes(source)) {
    return <Link
      href={`https://saan.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>{langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</Link>;
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
    <Grid item xs={12}>
      <Typography>
        Source: <SourceLink from={names[source]['from']} to={names[source]['to']} lemma={lemma} source={source} />
      </Typography>
    </Grid>
  );
};

export default Source;
