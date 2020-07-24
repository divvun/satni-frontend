import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useCookies } from 'react-cookie';
import Typography from '@material-ui/core/Typography';

const LangChooser = () => {
  const [cookies, setCookie] = useCookies(['wantedLangs']);
  const availableLanguages = [
    'sma', 'sme', 'smj', 'smn', 'sms', 'fin', 'nob', 'swe', 'lat', 'eng', 'nno'
  ];

  if (cookies.wantedLangs === undefined) {
    setCookie('wantedLangs', availableLanguages);
  }

  const handleChange = (event) => {
    const oldLangs = cookies.wantedLangs;
    const newLangs = oldLangs.includes(event.target.name) ?
                      oldLangs.filter(value => value !== event.target.name) :
                      [...oldLangs, event.target.name];
    setCookie('wantedLangs', newLangs);
  };

  return (
    <>
      <Typography>Dictionary languages</Typography>
      <div>
        <FormGroup row>
          {availableLanguages.map(lang => (
            <FormControlLabel
              key={lang}
              control={
                <Checkbox
                  color='default'
                  checked={cookies.wantedLangs.includes(lang)}
                  onChange={handleChange}
                  name={lang}
               />
              }
              label={`${lang}label`}
            />
          ))}
        </FormGroup>
      </div>
    </>
  );
};

export default LangChooser;
