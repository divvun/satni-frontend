import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  paradigm: {
    marginBottom: 6
  }
});

const MinimalParadigm = ({stem}) => {
  const classes = useStyles();
  // {Object.keys(paradigm).map(key => paradigm[key]).flat().join(', ')}

  return (
    <Typography className={classes.paradigm}>
      Here it comes!
    </Typography>
  );
};

export default MinimalParadigm;
