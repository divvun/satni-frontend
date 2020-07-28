import React from 'react';
import Typography from '@material-ui/core/Typography';

import Stem from './Stem';

const LemmaGroup = ({term, withLink, lemmaHandler}) => (
  <>
    <Stem
      stem={term.expression}
      lemmaHandler={lemmaHandler}
      withLink={withLink}/>
    {term.note && <Typography>Note: {term.note}</Typography>}
    {term.status && <Typography>Status: {term.status}</Typography>}
    {term.source && <Typography>Source: {term.source}</Typography>}
  </>
);

export default LemmaGroup;
