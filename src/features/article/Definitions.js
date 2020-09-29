import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import classNames from 'classnames';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  divisor: {
    marginBottom: theme.spacing(1),
    borderLeftColor: '#eee'
  },
  padding: {
    paddingLeft: theme.spacing(1)
  }
}));

const Definitions = ({definitions}) => {
  const classes = useStyles();

  return (
    <Box
      borderLeft={5}
      className={classes.divisor}>
      <Typography
        className={classes.padding}>
        <Trans>Definition</Trans>:
      </Typography>
      <Typography
        className={classes.padding}>
        {definitions}
      </Typography>
    </Box>
  );
};

export default Definitions;
