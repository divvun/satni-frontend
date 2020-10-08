import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import { wantedLangsVar } from 'apolloCache';

const useStyles = makeStyles(theme => ({
  lang1: {
    marginRight: theme.spacing(1)
  },
}));

const PairHeader = ({ language }) => {
  const classes = useStyles();
  const wantedLangs = wantedLangsVar();

  const handleChange = (event) => {
    event.stopPropagation();
    wantedLangsVar(wantedLangs.filter(value => value !== event.target.name));
  };

  return (
    <FormControlLabel
      className={classes.lang1}
      label={<Typography
        variant='subtitle2'
      ><Trans id={language} /></Typography>}
      control={
        <Checkbox
          checked
          className={classes.check}
          color='default'
          name={language}
          onChange={handleChange}
        />
      }
    />
  );
};

export default PairHeader;
