import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';

import { langName } from 'langThings';

const SourceLink = ({from, to, lemma, source}) => {
  if (['gtnobsme', 'gtsmenob', 'gtfinsme', 'gtsmefin'].includes(source)) {
    return <Link
      href={`https://sanit.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>{langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</Link>;
  } else if (['gtsmanob', 'gtnobsma'].includes(source)) {
    return <Link
      href={`https://baakoeh.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>{langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</Link>;
  } else if (['gtsmnfin', 'gtfinsmn', 'gtsmesmn', 'gtsmnsme'].includes(source)) {
    return <Link
      href={`https://saanih.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>{langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</Link>;
  } else if (['gtsmsfin', 'gtfinsms'].includes(source)) {
    return <Link
      href={`https://saan.oahpa.no/detail/${from}/${to}/${lemma}.html`}
      target='_blank'
      rel='noopener noreferrer'>{langName[names[source]['from']]} → {langName[names[source]['to']]} {names[source]['name']}</Link>;
  } else {
    return 'Source';
  }
};

const names = {
  gtsmenob: {
    name: 'Neahttadigisánit',
    from: 'sme',
    to: 'nob'
  },
  gtsmesmn: {
    name: 'Neahttadigisánit',
    from: 'sme',
    to: 'smn'
  },
  gtnobsme: {
    name: 'Neahttadigisánit',
    from: 'nob',
    to: 'sme'
  },
  gtsmefin: {
    name: 'Neahttadigisánit',
    from: 'sme',
    to: 'fin'
  },
  gtfinsme: {
    name: 'Neahttadigisánit',
    from: 'fin',
    to: 'sme'
  },
  gtsmsfin: {
    name: 'Neahttadigisánit',
    from: 'sms',
    to: 'fin'
  },
  gtfinsms: {
    name: 'Neahttadigisánit',
    from: 'fin',
    to: 'sms'
  },
  gtsmanob: {
    name: 'Nedtedigibaahkoeh',
    from: 'sma',
    to: 'nob'
  },
  gtnobsma: {
    name: 'Nedtedigibaahkoeh',
    from: 'nob',
    to: 'sma'
  },
  gtsmnfin: {
    name: 'Nettidigsäänih',
    from: 'smn',
    to: 'fin'
  },
  gtsmnsme: {
    name: 'Nettidigsäänih',
    from: 'smn',
    to: 'sme'
  },
  gtfinsmn: {
    name: 'Nettidigsäänih',
    from: 'fin',
    to: 'smn'
  }
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1)
  },
  title: {
    fontSize: 14
  }
}));

const Source = ({source, lemma}) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.paper}>
      <Typography>
        <Trans>
          Source: {
            source !== 'sammallahtismefin' ?
              <SourceLink from={names[source]['from']} to={names[source]['to']} lemma={lemma} source={source} /> :
              <Trans><span>Pekka Sammallahtis North Sami – Finnish dictionary</span></Trans>
          }
        </Trans>
      </Typography>
    </Grid>
  );
};

export default Source;
