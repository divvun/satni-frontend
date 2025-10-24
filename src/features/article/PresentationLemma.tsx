/* eslint-disable react/no-array-index-key */

import React from 'react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@material-ui/core/Typography';

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
              {/* @ts-ignore - Material-UI v4 compatibility */}
              <Typography component="span" className={classes.lemma}>
                {part.slice(0, -1)}
              </Typography>
              {/* @ts-ignore - Material-UI v4 compatibility */}
              <Typography component="span" className={classes.sammallahti}>
                {part.slice(-1)}
              </Typography>
            </React.Fragment>
          );
        }

        return (
          // @ts-ignore - Material-UI v4 compatibility
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

const PresentationLemma: React.FC<PresentationLemmaProps> = ({ presentationLemma }) => {
  const classes = useStyles();

  return <Parts lemma={presentationLemma} classes={classes} />;
};

export default PresentationLemma;