import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Accordion from '@material-ui/core/Accordion';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import AccordionDetails from '@material-ui/core/AccordionDetails';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import AccordionSummary from '@material-ui/core/AccordionSummary';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Checkbox from '@material-ui/core/Checkbox';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles, Theme } from '@material-ui/core/styles';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@material-ui/core/Typography';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
              aria-label={<Trans id={dict} />}
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
              label={<Trans id={dict} />}
            />
          </AccordionSummary>
          {/* @ts-ignore - Material-UI v4 compatibility */}
          <AccordionDetails>
            {(dictionaryInfo as any)[dict]?.info?.map((infoText: string) => (
              // @ts-ignore - Material-UI v4 compatibility
              <Typography key={infoText} className={classes.infoText}>
                <Trans id={infoText} />
              </Typography>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};

export default DictChooser;