import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useCookies } from 'react-cookie';
import Typography from '@material-ui/core/Typography';

const DictChooser = () => {
  const [cookies, setCookie] = useCookies(['wantedDicts']);
  const availableDicts = [
    'termwiki', 'gtsmenob', 'gtnobsme', 'gtnobsma', 'gtsmanob', 'gtsmefin', 'gtfinsme', 'gtsmesmn', 'gtsmnsme', 'pksmefin'
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
    <>
      <Typography>Dictionaries</Typography>
      <div>
        <FormGroup row>
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
              label={`${dict}label`}
            />
          ))}
        </FormGroup>
      </div>
    </>
  );
};

export default DictChooser;
