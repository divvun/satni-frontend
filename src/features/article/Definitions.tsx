import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Box from '@mui/material/Box';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import { } from '@mui/material/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

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

interface DefinitionsProps {
  definitions: string;
  language: string;
}

const Definitions: React.FC<DefinitionsProps> = ({ definitions, language }) => {
  const classes = useStyles();

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Box className={classes.divisor}>
      {/* @ts-ignore - Material-UI v4 compatibility */}
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
        {/* @ts-ignore - Material-UI v4 compatibility */}
        <Typography>{definitions}</Typography>
      </div>
    </Box>
  );
};

export default Definitions;
