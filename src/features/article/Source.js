import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import { useCookies } from 'react-cookie';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  check: {
    margin: 0,
    paddingRight: 0
  }
}));

const Source = ({source, lemma}) => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(['wantedDicts']);

  const handleChange = (event) => {
    event.stopPropagation();
    const oldDicts = cookies.wantedDicts;
    const newDicts = oldDicts.includes(event.target.name) ?
      oldDicts.filter(value => value !== event.target.name) :
      [...oldDicts, event.target.name];
    setCookie('wantedDicts', newDicts);
  };

  return (
    <Grid item xs={12} className={classes.paper}>
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
    </Grid>
  );
};

export default Source;
