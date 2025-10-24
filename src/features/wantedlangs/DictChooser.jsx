import { Trans } from '@lingui/macro';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';

import dictionaryInfo from '../../translateble_variables';

const useStyles = makeStyles((theme) => ({
  accordionHeading: {
    // fontSize: theme.typography.pxToRem(15),
    // fontWeight: theme.typography.fontWeightRegular
  },
  infoText: {
    marginRight: theme.spacing(1),
    width: '50%',
  },
}));

const DictChooser = ({ dicts, setDicts }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    event.stopPropagation();
    const newDicts = dicts.includes(event.target.name)
      ? dicts.filter((value) => value !== event.target.name)
      : [...dicts, event.target.name];
    setDicts(newDicts);
  };

  return (
    <>
      {Object.keys(dictionaryInfo).map((dict) => (
        <Accordion key={dict}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${dict}-content`}
            id={`${dict}-header`}
          >
            <FormControlLabel
              aria-label={<Trans id={dict} />}
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={
                <Checkbox
                  checked={dicts.includes(dict)}
                  onChange={handleChange}
                  name={dict}
                />
              }
              label={<Trans id={dict} />}
            />
          </AccordionSummary>
          <AccordionDetails>
            {dictionaryInfo[dict].info.map((infoText) => (
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

DictChooser.propTypes = {
  dicts: PropTypes.arrayOf(PropTypes.string).isRequired,
  setDicts: PropTypes.func.isRequired,
};

export default DictChooser;
