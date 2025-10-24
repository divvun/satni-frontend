import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Accordion from '@mui/material/Accordion';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import AccordionDetails from '@mui/material/AccordionDetails';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import AccordionSummary from '@mui/material/AccordionSummary';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Checkbox from '@mui/material/Checkbox';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@mui/material/Typography';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';

import dictionaryInfo from '../../translateble_variables';

interface DictChooserProps {
  dicts: string[];
  setDicts: (dicts: string[]) => void;
}

const DictChooser: React.FC<DictChooserProps> = ({ dicts, setDicts }) => {
  const useStyles = makeStyles((theme: Theme) => ({
    accordionHeading: {
      // fontSize: theme.typography.pxToRem(15),
      // fontWeight: theme.typography.fontWeightRegular
    },
    infoText: {
      marginRight: theme.spacing(1),
      width: '50%',
    },
  }));
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();
    const newDicts = dicts.includes(event.target.name)
      ? dicts.filter((value) => value !== event.target.name)
      : [...dicts, event.target.name];
    setDicts(newDicts);
  };

  return (
    <>
      {Object.keys(dictionaryInfo).map((dict) => (
        // @ts-ignore - Material-UI v4 compatibility
        <Accordion key={dict}>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <AccordionSummary
            expandIcon={
              // @ts-ignore - Material-UI v4 compatibility
              <ExpandMoreIcon />
            }
            aria-controls={`${dict}-content`}
            id={`${dict}-header`}
          >
            {/* @ts-ignore - Material-UI v4 compatibility */}
            <FormControlLabel
              aria-label={dict}
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={
                // @ts-ignore - Material-UI v4 compatibility
                <Checkbox
                  checked={dicts.includes(dict)}
                  onChange={handleChange}
                  name={dict}
                />
              }
              label={<Trans id={dict}>{dict}</Trans>}
            />
          </AccordionSummary>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <AccordionDetails>
            {(dictionaryInfo as any)[dict]?.info?.map((infoText: string) => (
              // @ts-ignore - Material-UI v4 compatibility
              <Typography key={infoText} className={classes.infoText}>
                <Trans id={infoText}>{infoText}</Trans>
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default DictChooser;
