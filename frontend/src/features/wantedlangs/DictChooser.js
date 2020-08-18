import React from 'react';
import { Trans } from '@lingui/macro';
import { useCookies } from 'react-cookie';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const DictChooser = () => {
  const [cookies, setCookie] = useCookies(['wantedDicts']);
  const availableDicts = [
    'termwiki', 'gtsmenob', 'gtnobsme', 'gtnobsma', 'gtsmanob', 'gtsmefin', 'gtfinsme', 'gtsmesmn', 'gtsmnsme', 'sammallahtismefin'
  ];

  if (cookies.wantedDicts === undefined) {
    setCookie('wantedDicts', availableDicts);
  }

  const handleChange = (event) => {
    const oldDicts = cookies.wantedDicts;
    const newDicts = oldDicts.includes(event.target.name) ?
      oldDicts.filter(value => value !== event.target.name) :
      [...oldDicts, event.target.name];
    setCookie('wantedDicts', newDicts);
  };

  return (
    <FormGroup column>
      {availableDicts.map(dict => (
        <FormControlLabel
          key={dict}
          control={
            <Checkbox
              color='default'
              checked={cookies.wantedDicts.includes(dict)}
              onChange={handleChange}
              name={dict}
            />
          }
          label={<Trans id={dict} />}
        />
      ))}
    </FormGroup>
  );
};

export default DictChooser;
