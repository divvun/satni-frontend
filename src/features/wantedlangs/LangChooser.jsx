import { Trans } from '@lingui/macro';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import setSrcLangs from '../../operations/mutations/setSrcLangs';
import setTargetLangs from '../../operations/mutations/setTargetLangs';
import { availableLanguages } from '../../utils';

const LangChooser = ({ langs }) => {
  const samiLanguages = new Set(['sma', 'sme', 'smj', 'smn', 'sms']);

  const handleChange = (event) => {
    const newLangs = langs.includes(event.target.name)
      ? langs.filter((value) => value !== event.target.name)
      : [...langs, event.target.name];
    setSrcLangs(newLangs);
    setTargetLangs(newLangs);
  };

  return (
    <Grid container>
      <Grid item xs={6}>
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
                label={<Trans id={lang} />}
              />
            ))}
        </FormGroup>
      </Grid>
      <Grid item xs={6}>
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
                label={<Trans id={lang} />}
              />
            ))}
        </FormGroup>
      </Grid>
    </Grid>
  );
};

LangChooser.propTypes = {
  langs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LangChooser;
