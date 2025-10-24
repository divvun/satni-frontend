import { Trans } from '@lingui/macro';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
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
          <Trans id={language} />
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
