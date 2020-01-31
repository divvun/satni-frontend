import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  paradigm: {
    marginBottom: 6
  }
});

const MinimalParadigm = ({paradigm}) => {
  const classes = useStyles();

  return (
    <Typography className={classes.paradigm}>
      {Object.keys(paradigm).map(key => paradigm[key]).flat().join(', ')}
    </Typography>
  );
};

export default MinimalParadigm;
