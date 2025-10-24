import { Trans } from '@lingui/macro';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { wantedDictsVar } from '../../apolloCache';

const Source = ({ source, lemma }) => {
  const wantedDicts = wantedDictsVar();

  const handleChange = (event) => {
    event.stopPropagation();
    wantedDictsVar(wantedDicts.filter((value) => value !== event.target.name));
  };

  return (
    <FormControlLabel
      label={
        <Typography variant="body2">
          <Trans>Source:</Trans>{' '}
          <Link to={`${source}/${lemma}`}>
            <Trans id={source}>{source}</Trans>
          </Link>
        </Typography>
      }
      control={
        <Tooltip
          title={<Trans>Hide this dictionary</Trans>}
          aria-label={<Trans>Hide this dictionary</Trans>}
        >
          <Checkbox
            checked
            color="default"
            name={source}
            onChange={handleChange}
          />
        </Tooltip>
      }
    />
  );
};

Source.propTypes = {
  source: PropTypes.string.isRequired,
  lemma: PropTypes.string.isRequired,
};

export default Source;
