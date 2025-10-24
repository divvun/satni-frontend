import { t } from '@lingui/macro';
import { I18n } from '@lingui/react';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  input: {
    color: 'inherit',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));

const InputWithTranslation = (props) => {
  const classes = useStyles();
  const { value, onChange, onKeyUp } = props;
  const [inputValue, setInputValue] = useState(value);

  // Custom hook for debouncing
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (inputValue !== value) {
        onChange({ target: { value: inputValue } });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, onChange, value]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <I18n>
      {({ i18n }) => (
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

InputWithTranslation.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired,
};

export default InputWithTranslation;
