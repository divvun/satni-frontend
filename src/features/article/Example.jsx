import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SpeakerButton from '../speaker/SpeakerButton';

const useStyles = makeStyles((theme) => ({
  divisor: {
    marginBottom: theme.spacing(1),
    borderLeftColor: '#eee',
  },
  padding: {
    paddingLeft: theme.spacing(1),
  },
  second: {
    fontStyle: 'italic',
  },
  exampleRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
}));

const Example = ({ example, sourceLanguage, targetLanguage }) => {
  const classes = useStyles();

  return (
    <Box borderLeft={5} className={classes.divisor}>
      <div className={classNames(classes.padding, classes.exampleRow)}>
        {['sme', 'sma', 'smj'].includes(sourceLanguage) && (
          <SpeakerButton
            text={example.example}
            language={sourceLanguage}
            classes={{ icons: '' }}
          />
        )}
        <Typography>{example.example}</Typography>
      </div>
      <div
        className={classNames(
          classes.second,
          classes.padding,
          classes.exampleRow,
        )}
      >
        {['sme', 'sma', 'smj'].includes(targetLanguage) && (
          <SpeakerButton
            text={example.translation}
            language={targetLanguage}
            classes={{ icons: '' }}
          />
        )}
        <Typography>{example.translation}</Typography>
      </div>
    </Box>
  );
};

Example.propTypes = {
  example: PropTypes.shape.isRequired,
  sourceLanguage: PropTypes.string.isRequired,
  targetLanguage: PropTypes.string.isRequired,
};

export default Example;
