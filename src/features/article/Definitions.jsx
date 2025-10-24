import { Trans } from '@lingui/macro';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

import SpeakerButton from '../speaker/SpeakerButton';

const useStyles = makeStyles((theme) => ({
  divisor: {
    margin: theme.spacing(1),
  },
  definitionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
}));

const Definitions = ({ definitions, language }) => {
  const classes = useStyles();

  return (
    <Box className={classes.divisor}>
      <Typography color="textSecondary">
        <Trans>Definition</Trans>:
      </Typography>
      <div className={classes.definitionRow}>
        {['sme', 'sma', 'smj'].includes(language) && (
          <SpeakerButton
            text={definitions}
            language={language}
            classes={{ icons: '' }}
          />
        )}
        <Typography>{definitions}</Typography>
      </div>
    </Box>
  );
};

Definitions.propTypes = {
  definitions: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};

export default Definitions;
