import { Trans } from '@lingui/react/macro';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import PropTypes from 'prop-types';
import { useLingui } from "@lingui/react";

import { availableVoices } from './speakerVoices';

const SpeakerChooser = ({ selectedVoices, onVoiceChange }) => {
  const { _ } = useLingui();
  const handleChange = (language) => (event) => {
    onVoiceChange(language, event.target.value);
  };

  return (
    <Grid container spacing={3}>
      {Object.entries(availableVoices).map(([language, voices]) => (
        <Grid size={{ xs: 12, sm: 4 }} key={language}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {languageCodes[language] ? _(languageCodes[language]) : language}
            </FormLabel>
            <RadioGroup
              aria-label={`voice-${language}`}
              name={`voice-${language}`}
              value={selectedVoices[language] || voices[0]}
              onChange={handleChange(language)}
            >
              {voices.map((voice) => (
                <FormControlLabel
                  key={voice}
                  value={voice}
                  control={<Radio color="primary" />}
                  label={voice.charAt(0).toUpperCase() + voice.slice(1)}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

SpeakerChooser.propTypes = {
  selectedVoices: PropTypes.objectOf(PropTypes.string).isRequired,
  onVoiceChange: PropTypes.func.isRequired,
};

export default SpeakerChooser;
