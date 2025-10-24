import { Trans } from '@lingui/macro';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import PropTypes from 'prop-types';

import { availableVoices } from './speakerVoices';

const SpeakerChooser = ({ selectedVoices, onVoiceChange }) => {
  const handleChange = (language) => (event) => {
    onVoiceChange(language, event.target.value);
  };

  return (
    <Grid container spacing={3}>
      {Object.entries(availableVoices).map(([language, voices]) => (
        <Grid item xs={12} sm={4} key={language}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              <Trans id={language} />
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
