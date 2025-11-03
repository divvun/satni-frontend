/* eslint-disable react/no-array-index-key */

import React from "react";
import Box from "@mui/material/Box";

import LemmaGroup from "./LemmaGroup";

interface LemmaGroupsProps {
  lemma: string;
  terms: any[];
}

const LemmaGroups: React.FC<LemmaGroupsProps> = ({ lemma, terms }) => {
  return (
    <Box sx={{ m: 1 }}>
      {terms.map((term, index) => (
        <LemmaGroup key={index} lemma={lemma} term={term} />
      ))}
    </Box>
  );
};

export default LemmaGroups;
