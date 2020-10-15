import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  divisor: {
    marginBottom: theme.spacing(1),
    borderLeftColor: '#eee'
  },
  padding: {
    paddingLeft: theme.spacing(1)
  },
  second: {
    fontStyle: 'italic'
  }
}));

const Example = ({example}) => {
  const classes = useStyles();

  return (
    <Box
      borderLeft={5}
      className={classes.divisor}>
      <Typography className={classes.padding}>{example.example}</Typography>
      <Typography
        className={classNames(classes.second, classes.padding)}>
        {example.translation}
      </Typography>
    </Box>
  );
};

Example.propTypes = {
  example: PropTypes.object.isRequired
};

export default Example;
