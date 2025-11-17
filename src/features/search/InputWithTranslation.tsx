import React from "react";
import { msg } from "@lingui/macro";
import { useLingui } from "@lingui/react";
import InputBase from "@mui/material/InputBase";
import { useEffect, useRef, useState } from "react";

interface InputWithTranslationProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputWithTranslation: React.FC<InputWithTranslationProps> = (props) => {
  const { value, onChange, onKeyUp } = props;
  const [inputValue, setInputValue] = useState<string>(value);
  const { _ } = useLingui();
  const isTypingRef = useRef<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Only update inputValue from prop when not actively typing
  useEffect(() => {
    if (!isTypingRef.current) {
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Only call onChange if the input value differs from prop value
    if (inputValue !== value) {
      timeoutRef.current = setTimeout(() => {
        onChange({
          target: { value: inputValue },
        } as React.ChangeEvent<HTMLInputElement>);
        isTypingRef.current = false;
      }, 300);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    isTypingRef.current = true;
    setInputValue(event.target.value);
  };

  return (
    <InputBase
      autoFocus
      value={inputValue}
      onChange={handleInputChange}
      onKeyUp={onKeyUp}
      placeholder={_(msg`Write at least one letter here`)}
      sx={{
        color: "inherit",
        ml: 1,
        flex: 1,
      }}
      inputProps={{ "aria-label": "search" }}
    />
  );
};

export default InputWithTranslation;
