import React from 'react';
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from '@lingui/macro';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Box from '@mui/material/Box';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Typography from '@mui/material/Typography';

import Stem from './Stem';

interface Expression {
  lemma: string;
  presentationLemma: string;
  pos: string;
  language: string;
  dialect?: string;
  country?: string;
}

interface Term {
  expression: Expression;
  note?: string;
  status?: string;
  source?: string;
}

interface LemmaGroupProps {
  lemma: string;
  term: Term;
}

const LemmaGroup: React.FC<LemmaGroupProps> = ({ lemma, term }) => (
  // @ts-ignore - Material-UI v4 compatibility
  <Box>
    <Stem stem={term.expression} withLink={term.expression.lemma !== lemma} />
    {term.note && (
      // @ts-ignore - Material-UI v4 compatibility
      <Typography>
        <Trans>Note:</Trans> {term.note}
      </Typography>
    )}
    {term.status && (
      // @ts-ignore - Material-UI v4 compatibility
      <Typography>
        <Trans>Status:</Trans> {term.status}
      </Typography>
    )}
    {term.source && (
      // @ts-ignore - Material-UI v4 compatibility
      <Typography>
        <Trans>Source:</Trans> {term.source}
      </Typography>
    )}
  </Box>
);

export default LemmaGroup;
