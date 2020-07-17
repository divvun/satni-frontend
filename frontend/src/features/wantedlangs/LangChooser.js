import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useQuery } from '@apollo/react-hooks';
import { GET_WANTED_LANGS } from 'resolvers';
import { useApolloClient } from '@apollo/react-hooks';

const LangChooser = () => {
  const client = useApolloClient();
  const { data } = useQuery(GET_WANTED_LANGS);
  const availableLanguages = [
    'sma', 'sme', 'smj', 'smn', 'sms', 'fin', 'nob', 'swe', 'lat', 'eng', 'nno'
  ];

  const handleChange = (event) => {
    const newLangs = data.wantedLangs.includes(event.target.name) ?
                      data.wantedLangs.filter(value => value !== event.target.name) :
                      [...data.wantedLangs, event.target.name];
    client.writeData({
      data: {
        wantedLangs: newLangs
      }
    });
  };

  return (
    <FormGroup row>
      {availableLanguages.map(lang => (
        <FormControlLabel
          key={lang}
          control={
            <Checkbox
              color='default'
              checked={data.wantedLangs.includes(lang)}
              onChange={handleChange}
              name={lang}
           />
          }
          label={`${lang}label`}
        />
      ))}
    </FormGroup>
  );
};

export default LangChooser;
