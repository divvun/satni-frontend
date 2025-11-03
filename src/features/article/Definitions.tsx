import React from "react";
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from "@lingui/react/macro";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SpeakerButton from "../speaker/SpeakerButton";

interface DefinitionsProps {
  definitions: string;
  language: string;
}

const Definitions: React.FC<DefinitionsProps> = ({ definitions, language }) => {
  return (
    <Box sx={{ m: 1 }}>
      <Typography color="textSecondary">
        <Trans>Definition</Trans>:
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {["sme", "sma", "smj"].includes(language) && (
          <SpeakerButton
            text={definitions}
            language={language}
            classes={{ icons: "" }}
          />
        )}
        <Typography>{definitions}</Typography>
      </Box>
    </Box>
  );
};

export default Definitions;
