import React from 'react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Box from '@material-ui/core/Box';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@material-ui/core/Typography';
// @ts-ignore - classnames types compatibility
import classNames from 'classnames';

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

interface ExampleData {
  example: string;
  translation: string;
}

interface ExampleProps {
  example: ExampleData;
  sourceLanguage: string;
  targetLanguage: string;
}

const Example: React.FC<ExampleProps> = ({
  example,
  sourceLanguage,
  targetLanguage,
}) => {
  const classes = useStyles();

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Box borderLeft={5} className={classes.divisor}>
      <div className={classNames(classes.padding, classes.exampleRow)}>
        {['sme', 'sma', 'smj'].includes(sourceLanguage) && (
          <SpeakerButton
            text={example.example}
            language={sourceLanguage}
            classes={{ icons: '' }}
          />
        )}
        {/* @ts-ignore - Material-UI v4 compatibility */}
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
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Typography>{example.translation}</Typography>
      </div>
    </Box>
  );
};

export default Example;
