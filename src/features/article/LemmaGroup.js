import React from 'react';
import { Trans } from '@lingui/macro';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import Stem from './Stem';

const LemmaGroup = ({ lemma, term }) => {
  return (
    <Box>
      <Stem stem={term.expression} withLink={term.expression.lemma !== lemma} />
      {term.note && (
        <Typography>
          <Trans>Note:</Trans> {term.note}
        </Typography>
      )}
      {term.status && (
        <Typography>
          <Trans>Status:</Trans> {term.status}
        </Typography>
      )}
      {term.source && (
        <Typography>
          <Trans>Source:</Trans> {term.source}
        </Typography>
      )}
    </Box>
  );
};

LemmaGroup.propTypes = {
  lemma: PropTypes.string.isRequired,
  term: PropTypes.object.isRequired,
};

export default LemmaGroup;
