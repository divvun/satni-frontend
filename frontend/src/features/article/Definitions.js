import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: 12
  }
}));

const Definitions = ({definitions}) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography className={classes.title} color='textSecondary'>
        Definitions:
      </Typography>
      </Grid>
      {definitions.map((definition, i) => (
        <Grid item xs={6} key={i}>
          <Typography>{definition}</Typography>
        </Grid>)
      )}
    </Grid>
  );
};

export default Definitions;
