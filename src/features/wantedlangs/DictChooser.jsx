/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
// import React from 'react';
import PropTypes from 'prop-types';

import ToggleButton from 'react-bootstrap/ToggleButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const DictChooser = ({ dicts, setDicts }) => {
  // const checked = useState(false);
  const [checked, setChecked] = useState(false);

  console.log('dicts=', dicts);

  const handleChange = (event) => {
    console.log('====');
    console.log('value', event.target.value);
    console.log('checked', event.target.checked);
    setDicts(event.target.value);

    // setChecked(event.currentTarget.checked);
  };

  /*
  const { dictionaryInfo: ndsDictionaryInfo } = {
     dictionaryInfo: ['gtsmenob', 'gtnobsme', 'gtsmefin', 'gtfinsme'],
    dictionaryInfo: ['gtsmenob', 'gtnobsme'],
  };
  console.log('ndsDictionaryInfo', ndsDictionaryInfo);

*/

  return (
    <>
      <div className="container-fluid">
        <>
          <ButtonGroup vertical>
            {Object.keys(dicts).map((dict) => (
              <ToggleButton
                type="radio"
                variant="outline-secondary"
                name="radio"
                // checked={dict}
                // checked={dicts.includes(dict)}
                checked={dicts[dict]}
                onClick={handleChange}
                value={dicts[dict]}
                inputProps={{ 'aria-label': { dict } }}
              >
                <span className="radio_text">{dicts[dict]}</span>
              </ToggleButton>
            ))}
          </ButtonGroup>
        </>
      </div>
    </>
  );
};

DictChooser.propTypes = {
  // sanit: PropTypes.arrayOf(PropTypes.string).isRequired,
  dicts: PropTypes.arrayOf(PropTypes.string).isRequired,
  setDicts: PropTypes.func.isRequired,
  // setChecked: PropTypes.func.isRequired,
};

export default DictChooser;
