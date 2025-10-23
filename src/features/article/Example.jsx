import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import SpeakerButton from '../speaker/SpeakerButton';

const useStyles = makeStyles((theme) => ({
  divisor: {
    marginBottom: theme.spacing(1),
    borderLeftColor: '#eee',
  },
  padding: {
    paddingLeft: theme.spacing(1),
  },
  second: {
    fontStyle: 'italic',
  },
  exampleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
}));

const Example = ({ example, language }) => {
  const classes = useStyles();

  return (
    <Box borderLeft={5} className={classes.divisor}>
      <div className={classNames(classes.padding, classes.exampleRow)}>
        {['sme', 'sma', 'smj'].includes(language) && (
          <SpeakerButton
            text={example.example}
            language={language}
            classes={{ icons: '' }}
          />
        )}
        <Typography>{example.example}</Typography>
      </div>
      <Typography className={classNames(classes.second, classes.padding)}>
        {example.translation}
      </Typography>
    </Box>
  );
};

Example.propTypes = {
  example: PropTypes.shape.isRequired,
  language: PropTypes.string.isRequired,
};

export default Example;
