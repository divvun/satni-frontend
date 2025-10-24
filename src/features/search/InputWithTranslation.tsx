import React from 'react';
import { msg } from '@lingui/macro';
import { useLingui } from '@lingui/react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import InputBase from '@mui/material/InputBase';
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

interface InputWithTranslationProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputWithTranslation: React.FC<InputWithTranslationProps> = (props) => {
  const useStyles = makeStyles((theme: Theme) => ({
    input: {
      color: 'inherit',
      marginLeft: theme.spacing(1),
      flex: 1,
    },
  }));
  const classes = useStyles();

  const { value, onChange, onKeyUp } = props;
  const [inputValue, setInputValue] = useState<string>(value);
  const { _ } = useLingui();

  // Custom hook for debouncing
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue !== value) {
        onChange({ target: { value: inputValue } } as React.ChangeEvent<
          HTMLInputElement
        >);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, onChange, value]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <InputBase
      autoFocus
      value={inputValue}
      onChange={handleInputChange}
      onKeyUp={onKeyUp}
      placeholder={_(msg`Write at least one letter here`)}
      className={classes.input}
      inputProps={{ 'aria-label': 'search' }}
    />
  );
};

export default InputWithTranslation;
