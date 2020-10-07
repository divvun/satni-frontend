import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Trans } from '@lingui/macro';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import { wantedDictsVar } from 'apolloCache';

const useStyles = makeStyles(theme => ({
  check: {
    margin: 0,
    paddingRight: 0
  }
}));

const Source = ({source, lemma}) => {
  const classes = useStyles();
  const wantedDicts = wantedDictsVar();

  const handleChange = (event) => {
    event.stopPropagation();
    wantedDictsVar(wantedDicts.filter(value => value !== event.target.name));
  };

  return (
    <FormControlLabel
      label={<Typography variant='body2'
      >
        <Trans>Source:</Trans> <Link to={`${source}/${lemma}`}><Trans id={source} /></Link>
      </Typography>}
      control={
        <Checkbox
          checked
          className={classes.check}
          color='default'
          name={source}
          onChange={handleChange}
        />
      }
    />
  );
};

export default Source;
