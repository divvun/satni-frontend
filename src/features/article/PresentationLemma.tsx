/* eslint-disable react/no-array-index-key */

import React from 'react';
import { } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  lemma: {
    fontWeight: 'normal',
  },
  sammallahti: {
    fontWeight: 'bolder',
  },
});

interface PartsProps {
  lemma: string;
  classes: {
    lemma: string;
    sammallahti: string;
  };
}

const Parts: React.FC<PartsProps> = ({ lemma, classes }) => {
  const parts = lemma.split('@');

  return (
    <>
      {parts.map((part, index) => {
        if (index < parts.length - 1) {
          return (
            <React.Fragment key={index}>
              <Typography component="span" className={classes.lemma}>
                {part.slice(0, -1)}
              </Typography>
              <Typography component="span" className={classes.sammallahti}>
                {part.slice(-1)}
              </Typography>
            </React.Fragment>
          );
        }

        return (
          <Typography key={index} component="span" className={classes.lemma}>
            {part}
          </Typography>
        );
      })}
    </>
  );
};

interface PresentationLemmaProps {
  presentationLemma: string;
}

const PresentationLemma: React.FC<PresentationLemmaProps> = ({
  presentationLemma,
}) => {
  const classes = useStyles();

  return <Parts lemma={presentationLemma} classes={classes} />;
};

export default PresentationLemma;
