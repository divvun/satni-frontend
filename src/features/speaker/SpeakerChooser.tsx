import { useLingui } from "@lingui/react";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { availableVoices, getVoiceDisplayName } from "./speakerVoices";
import { languageCodes } from "../../translateble_variables";

interface SpeakerChooserProps {
  selectedVoices: Record<string, string>;
  onVoiceChange: (language: string, voice: string) => void;
}

const SpeakerChooser: React.FC<SpeakerChooserProps> = ({
  selectedVoices,
  onVoiceChange,
}) => {
  const { _ } = useLingui();
  const handleChange =
    (language: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      onVoiceChange(language, event.target.value);
    };

  return (
    <Grid container spacing={3}>
      {Object.entries(availableVoices).map(([language, voices]) => (
        <Grid size={{ xs: 12, sm: 4 }} key={language}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              {languageCodes[language as keyof typeof languageCodes]
                ? _(languageCodes[language as keyof typeof languageCodes])
                : language}
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
                  label={getVoiceDisplayName(voice)}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      ))}
    </Grid>
  );
};

export default SpeakerChooser;
