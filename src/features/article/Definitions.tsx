import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
import Box from '@mui/material/Box';
import { } from '@mui/material/styles';
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

export default Definitions;
