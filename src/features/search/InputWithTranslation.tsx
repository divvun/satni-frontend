import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { t } from '@lingui/macro';
// @ts-ignore - @lingui/react types compatibility
import { I18n } from '@lingui/react';
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
    // @ts-ignore - @lingui/react types compatibility
    <I18n>
      {({ i18n }: { i18n: any }) => (
        // @ts-ignore - Material-UI v4 compatibility
        <InputBase
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={onKeyUp}
          placeholder={i18n._(t`Write at least one letter here`)}
          className={classes.input}
          inputProps={{ 'aria-label': 'search' }}
        />
      )}
    </I18n>
  );
};

export default InputWithTranslation;
