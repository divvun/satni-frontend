// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from "@lingui/react/macro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";
import { useLocation } from "react-router-dom";

import { locationParser } from "../../utils";
import DictArticles from "./DictArticles";
import TermArticles from "./TermArticles";

interface ArticlesProps {
  lemma: string;
  showHeader?: boolean;
}

const Articles: React.FC<ArticlesProps> = ({ lemma, showHeader = true }) => {
  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  return (
    <div>
      {showHeader && (
        <Typography sx={{ textAlign: "center" }}>
          <Trans>Results for «{lemma}»</Trans>
        </Typography>
      )}
      <Box
        sx={{
          height: "72vh",
          overflowY: "auto",
          pr: 2,
          pl: 2,
        }}
      >
        {(!currentDict || currentDict === "termwiki") && (
          <TermArticles lemma={lemma} />
        )}
        <DictArticles lemma={lemma} />
      </Box>
    </div>
  );
};

export default Articles;
