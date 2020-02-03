import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  pos: {
    marginBottom: 6
  }
});

const Stem = ({ stem }) => {
  const classes = useStyles();
  const {lemma, pos, re} = stem
  return (
    <>
      <Typography variant='h5' component='h2'>
        {lemma} {re}
      </Typography>
      <Typography className={classes.pos} color='textSecondary'>
        {pos}
      </Typography>
    </>
  );
};

export default Stem;
