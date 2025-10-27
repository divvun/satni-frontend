import { Trans } from '@lingui/react/macro';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { makeStyles } from '@mui/styles';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

// import { wantedLangsVar } from '../../apolloCache';

const useStyles = makeStyles((theme) => ({
  lang1: {
    marginRight: theme.spacing(1),
  },
}));

const PairHeader = ({ language }) => {
  const classes = useStyles();
  // const wantedLangs = wantedLangsVar();

  const handleChange = (event) => {
    event.stopPropagation();
    // wantedLangsVar(wantedLangs.filter((value) => value !== event.target.name));
  };

  return (
    <FormControlLabel
      className={classes.lang1}
      label={
        <Typography variant="subtitle2">
          <Trans id={language}>{language}</Trans>
        </Typography>
      }
      control={
        <Tooltip
          title={<Trans>Hide this language</Trans>}
          aria-label={<Trans>Hide this language</Trans>}
        >
          <Checkbox
            checked
            className={classes.check}
            color="default"
            name={language}
            onChange={handleChange}
          />
        </Tooltip>
      }
    />
  );
};

PairHeader.propTypes = {
  language: PropTypes.string.isRequired,
};

export default PairHeader;
