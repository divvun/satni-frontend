import React from 'react';
import { I18n } from '@lingui/react';
import { t } from '@lingui/macro';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { locationParser } from '../../utils';

const InputWithTranslation = (props, searchExpression) => {
  const { value, onChange, onKeyUp } = props;
  const history = useHistory();
  const location = useLocation();
  const currentPath = locationParser(location.pathname);

  const lookup = () => {
    const path = currentPath.currentDict
      ? `/${currentPath.currentDict}/${searchExpression}`
      : `/${searchExpression}`;
    history.push(path);
  };

  return (
    <I18n>
      {({ i18n }) => (
        <InputGroup
          autoFocus
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          placeholder={i18n._(t`Write at least one letter here`)}
          inputProps={{ 'aria-label': 'search' }}
        >
          <Button variant="outline-secondary" id="button-addon1">
            á
          </Button>

          <FormControl aria-label="Amount (to the nearest dollar)" />
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={lookup}
          >
            Search
          </Button>
          <Button variant="outline-secondary" id="button-addon1">
            Search texts
          </Button>
        </InputGroup>
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
