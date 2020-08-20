import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Trans } from '@lingui/macro';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

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
        <Trans>Source:</Trans> <Link to={source}><Trans id={source} /></Link>
      </Typography>
    </Grid>
  );
};

export default Source;
