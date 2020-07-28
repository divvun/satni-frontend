import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    textTransform: 'none',
  }
});

const SamiKeys = () => {
  const classes = useStyles();

  return (
    <>
      <Button variant='outlined' className={classes.root}>á</Button>
      <Button variant='outlined' className={classes.root}>š</Button>
      <Button variant='outlined' className={classes.root}>ŧ</Button>
      <Button variant='outlined' className={classes.root}>ŋ</Button>
      <Button variant='outlined' className={classes.root}>đ</Button>
      <Button variant='outlined' className={classes.root}>ž</Button>
      <Button variant='outlined' className={classes.root}>ŋ</Button>
      <Button variant='outlined' className={classes.root}>ï</Button>
      <Button variant='outlined' className={classes.root}>ŋ</Button>
      <Button variant='outlined' className={classes.root}>â</Button>
      <Button variant='outlined' className={classes.root}>ʒ</Button>
      <Button variant='outlined' className={classes.root}>ǯ</Button>
      <Button variant='outlined' className={classes.root}>ǧ</Button>
      <Button variant='outlined' className={classes.root}>ǩ</Button>
      <Button variant='outlined' className={classes.root}>ʹ</Button>
      <Button variant='outlined' className={classes.root}>õ</Button>
      <Button variant='outlined' className={classes.root}>å</Button>
      <Button variant='outlined' className={classes.root}>æ</Button>
      <Button variant='outlined' className={classes.root}>ä</Button>
      <Button variant='outlined' className={classes.root}>ø</Button>
      <Button variant='outlined' className={classes.root}>ö</Button>
    </>
  );
};

export default SamiKeys;
