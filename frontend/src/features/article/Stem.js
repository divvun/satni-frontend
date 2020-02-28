import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  lemma: {
    fontWeight: 'bold'
  },
  pos: {
  }
});

const Stem = ({ stem }) => {
  const classes = useStyles();
  const {lemma, pos, re, language} = stem;
  return (
    <Link href={`/details?lemma=${lemma}&lang=${language}&pos=${pos}`}>
      <Typography component='span' className={classes.lemma}>
        {lemma}
      </Typography>
      {re && <Typography component='span'> {re}</Typography>}
      {pos && <Typography component='span' color='textSecondary' className={classes.pos}> ({pos})</Typography>}
    </Link>
  );
};

export default Stem;
