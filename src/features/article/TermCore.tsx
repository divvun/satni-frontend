import React from "react";
import Grid from "@mui/material/Grid";

import Definitions from "./Definitions";
import LemmaGroups from "./LemmaGroups";
import PairHeader from "./PairHeader";

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
    <Grid container direction="column">
      <Grid size={12}>
        <PairHeader language={terms[0].expression.language} />
      </Grid>
      <Grid size={12}>
        <LemmaGroups lemma={lemma} terms={terms} />
      </Grid>
      {definition && (
        <Grid size={12}>
          <Definitions
            definitions={definition}
            language={terms[0].expression.language}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default TermCore;
