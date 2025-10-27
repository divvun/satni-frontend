import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/react/macro';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Grid from '@mui/material/Grid';
import setSrcLangs from '../../operations/mutations/setSrcLangs';
import setTargetLangs from '../../operations/mutations/setTargetLangs';
import { availableLanguages } from '../../utils';

interface LangChooserProps {
  langs: string[];
}

const LangChooser: React.FC<LangChooserProps> = ({ langs }) => {
  const samiLanguages = new Set(['sma', 'sme', 'smj', 'smn', 'sms']);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newLangs = langs.includes(event.target.name)
      ? langs.filter((value) => value !== event.target.name)
      : [...langs, event.target.name];
    setSrcLangs(newLangs);
    setTargetLangs(newLangs);
  };

  return (
    <Grid container>
      <Grid size={6}>
        <FormGroup row>
          {availableLanguages
            .filter((lang) => samiLanguages.has(lang))
            .map((lang) => (
              <FormControlLabel
                key={lang}
                control={
                  <Checkbox
                    color="default"
                    checked={langs.includes(lang)}
                    onChange={handleChange}
                    name={lang}
                  />
                }
                label={<Trans id={lang}>{lang}</Trans>}
              />
            ))}
        </FormGroup>
      </Grid>
      <Grid size={6}>
        <FormGroup row>
          {availableLanguages
            .filter((lang) => !samiLanguages.has(lang))
            .map((lang) => (
              <FormControlLabel
                key={lang}
                control={
                  <Checkbox
                    color="default"
                    checked={langs.includes(lang)}
                    onChange={handleChange}
                    name={lang}
                  />
                }
                label={<Trans id={lang}>{lang}</Trans>}
              />
            ))}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

export default LangChooser;
