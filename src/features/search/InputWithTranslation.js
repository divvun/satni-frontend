import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { I18n } from '@lingui/react';
import { t } from '@lingui/macro';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  input: {
    color: 'inherit',
    marginLeft: theme.spacing(1),
    flex: 1
  },
}));

const InputWithTranslation = props => {
  const classes = useStyles();
  const { value, onChange, onKeyUp } = props;

  return (
    <I18n>
      {({ i18n }) => (
        <InputBase
          autoFocus
          value={value}
          onChange={(onChange)}
          onKeyUp={(onKeyUp)}
          placeholder={i18n._(t`Write at least one letter here`)}
          className={classes.input}
          inputProps={{ 'aria-label': 'search' }} />
      )}
    </I18n>
  );
};

InputWithTranslation.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onKeyUp: PropTypes.func.isRequired
};

export default InputWithTranslation;
