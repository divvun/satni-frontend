import React from 'react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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
        // @ts-ignore - Material-UI v4 compatibility
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
