import React from 'react';
// @ts-ignore - Material-UI v4 compatibility with React 17/18
import Grid from '@material-ui/core/Grid';

import Definitions from './Definitions';
import LemmaGroups from './LemmaGroups';
import PairHeader from './PairHeader';

interface Term {
  expression: {
    language: string;
  };
}

interface Concept {
  definition?: string;
  terms: Term[];
}

interface TermCoreProps {
  concept: Concept;
  lemma: string;
}

const TermCore: React.FC<TermCoreProps> = ({ concept, lemma }) => {
  const { definition, terms } = concept;

  return (
    // @ts-ignore - Material-UI v4 compatibility
    <Grid container>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Grid md={3} xs={12} item>
        <PairHeader language={terms[0].expression.language} />
      </Grid>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Grid md={4} xs={12} item>
        <LemmaGroups lemma={lemma} terms={terms} />
      </Grid>
      {/* @ts-ignore - Material-UI v4 compatibility */}
      <Grid md={5} xs={12} item>
        {definition && (
          <Definitions
            definitions={definition}
            language={terms[0].expression.language}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default TermCore;