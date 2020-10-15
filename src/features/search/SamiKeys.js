import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textTransform: 'none',
  }
});

const SamiKeys = ({keyHandler}) => {
  const classes = useStyles();
  const chars = [
    'á', 'â', 'å', 'æ', 'ä', 'č','đ', 'ǧ', 'ï', 'ǩ', 'ŋ', 'õ', 'ø', 'ö',
    'š', 'ŧ', 'ž', 'ʒ', 'ǯ', 'ʹ'];

  return (
    <>
      {chars.map(char => <Button
        key={char}
        onClick={() => keyHandler(char)}
        variant='outlined'
        className={classes.root}
      >
        {char}
      </Button>)}
    </>
  );
};

SamiKeys.propTypes = {
  keyHandler: PropTypes.func.isRequired
};

export default SamiKeys;
