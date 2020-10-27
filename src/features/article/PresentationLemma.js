import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  lemma: {
    fontWeight: 'normal'
  },
  sammallahti: {
    fontWeight: 'bolder'
  }
});

const Parts = ({ lemma, classes }) => {
  const parts = lemma.split('@');

  return parts.map((part, index) => {
    if (index < parts.length - 1) {
      return <React.Fragment
        key={index}
      >
        <Typography component='span' className={classes.lemma}>
          {part.slice(0,-1)}
        </Typography>
        <Typography component='span' className={classes.sammallahti}>
          {part.slice(-1)}
        </Typography>
      </React.Fragment>;
    }

    return <Typography
      key={index}
      component='span'
      className={classes.lemma}
    >
      {part}
    </Typography>;
  }
  );
};

const PresentationLemma = ({ presentationLemma }) => {
  const classes = useStyles();

  return <>
    <Parts
      lemma={presentationLemma}
      classes={classes}
    />
  </>;
};

PresentationLemma.propTypes = {
  presentationLemma: PropTypes.string.isRequired
};

export default PresentationLemma;
