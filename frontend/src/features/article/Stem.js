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

// {re && <Typography component='span'> {re}</Typography>}

const Stem = ({ stem }) => {
  const classes = useStyles();
  const {lemma, pos, language} = stem;
  return (
    <Link component='a' href={`/details?lemma=${lemma}&lang=${language}&pos=${pos}`}>
      <Typography component='span' className={classes.lemma}>
        {lemma}
      </Typography>
      {pos && <Typography component='span' color='textSecondary' className={classes.pos}> ({pos})</Typography>}
    </Link>
  );
};

export default Stem;
