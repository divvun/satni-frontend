import React from 'react';
import { Link } from 'react-router-dom';
import { Trans } from '@lingui/macro';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';

import { wantedDictsVar } from 'apolloCache';

const Source = ({source, lemma}) => {
  const wantedDicts = wantedDictsVar();

  const handleChange = (event) => {
    event.stopPropagation();
    wantedDictsVar(wantedDicts.filter(value => value !== event.target.name));
  };

  return (
    <FormControlLabel
      label={<Typography variant='body2'
      >
        <Trans>Source:</Trans> <Link to={`${source}/${lemma}`}><Trans id={source} /></Link>
      </Typography>}
      control={
        <Checkbox
          checked
          color='default'
          name={source}
          onChange={handleChange}
        />
      }
    />
  );
};

export default Source;
