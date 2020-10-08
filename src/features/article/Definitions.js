import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Trans } from '@lingui/macro';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  divisor: {
    margin: theme.spacing(1)
  }
}));

const Definitions = ({definitions}) => {
  const classes = useStyles();

  return (
    <Box className={classes.divisor}>
      <Typography>
        <Trans>Definition</Trans>:
      </Typography>
      <Typography>
        {definitions}
      </Typography>
    </Box>
  );
};

export default Definitions;
