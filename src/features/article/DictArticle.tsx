/* eslint-disable react/no-array-index-key */

import React from "react";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useLocation } from "react-router-dom";

import { hasAvailableDict, type DictArticle as DictGroup } from "../../utils";
import DictTargetStem from "./DictTargetStem";
import Examples from "./Examples";
import Source from "./Source";
import Stem from "./Stem";

interface DictArticleProps {
  lemma: string;
  dictGroup: DictGroup;
}

const DictArticle: React.FC<DictArticleProps> = ({ dictGroup, lemma }) => {
  const { dict, from, to } = dictGroup;
  const { pathname } = useLocation();

  return (
    <Paper sx={{ p: 2, mb: 1 }} elevation={1}>
      <Grid container spacing={1}>
        <Grid size={12}>
          {!hasAvailableDict(pathname) && (
            <Source source={dict} lemma={lemma} />
          )}
          <Divider />
        </Grid>
        <Grid size={12}>
          {from.lookupLemmas.map((lookupLemma) =>
            lookupLemma.lemma === lemma ? (
              <Stem key={lookupLemma.lemma} stem={lookupLemma} />
            ) : (
              <DictTargetStem key={lookupLemma.lemma} stem={lookupLemma} />
            )
          )}
        </Grid>
        <Grid size={12} sx={{ ml: 2 }}>
          {to.translationGroups.map((translationGroup, i) => (
            <React.Fragment key={i}>
              {translationGroup.translations.map((stem, index) => (
                <DictTargetStem
                  key={index}
                  stem={stem}
                  restriction={translationGroup.restriction}
                />
              ))}
              {translationGroup.examples && (
                <Examples
                  examples={translationGroup.examples as any}
                  sourceLanguage={from.language}
                  targetLanguage={to.language}
                />
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default DictArticle;
