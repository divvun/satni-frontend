import React from 'react';
import { Trans } from '@lingui/macro';
import Typography from '@material-ui/core/Typography';

import Stem from './Stem';

const LemmaGroup = ({term, withLink}) => (
  <li>
    <Stem
      stem={term.expression}
      withLink={withLink} />
    {term.note && <Typography><Trans>Note:</Trans> {term.note}</Typography>}
    {term.status && <Typography><Trans>Status:</Trans> {term.status}</Typography>}
    {term.source && <Typography><Trans>Source:</Trans> {term.source}</Typography>}
  </li>
);

export default LemmaGroup;
