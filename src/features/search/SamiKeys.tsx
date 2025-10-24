import React from 'react';
import Button from '@mui/material/Button';
import { } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

interface SamiKeysProps {
  keyHandler: (char: string) => void;
}

const SamiKeys: React.FC<SamiKeysProps> = ({ keyHandler }) => {
  const useStyles = makeStyles({
    root: {
      textTransform: 'none',
    },
  });
  const classes = useStyles();

  const chars = [
    'á',
    'â',
    'å',
    'æ',
    'ä',
    'č',
    'đ',
    'ǧ',
    'ï',
    'ǩ',
    'ŋ',
    'õ',
    'ø',
    'ö',
    'š',
    'ŧ',
    'ž',
    'ʒ',
    'ǯ',
    'ʹ',
  ];

  return (
    <>
      {chars.map((char) => (
        <Button
          key={char}
          onClick={() => keyHandler(char)}
          variant="outlined"
          className={classes.root}
        >
          {char}
        </Button>
      ))}
    </>
  );
};

export default SamiKeys;
