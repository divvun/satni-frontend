import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import SpeakerButton from "../speaker/SpeakerButton";

interface ExampleData {
  example: string;
  translation: string;
}

interface ExampleProps {
  example: ExampleData;
  sourceLanguage: string;
  targetLanguage: string;
}

const Example: React.FC<ExampleProps> = ({
  example,
  sourceLanguage,
  targetLanguage,
}) => {
  return (
    <Box
      borderLeft={5}
      sx={{
        mb: 1,
        borderLeftColor: "#eee",
      }}
    >
      <Box
        sx={{
          pl: 1,
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {["sme", "sma", "smj"].includes(sourceLanguage) && (
          <SpeakerButton
            text={example.example}
            language={sourceLanguage}
            classes={{ icons: "" }}
          />
        )}
        <Typography>{example.example}</Typography>
      </Box>
      <Box
        sx={{
          fontStyle: "italic",
          pl: 1,
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}
      >
        {["sme", "sma", "smj"].includes(targetLanguage) && (
          <SpeakerButton
            text={example.translation}
            language={targetLanguage}
            classes={{ icons: "" }}
          />
        )}
        <Typography>{example.translation}</Typography>
      </Box>
    </Box>
  );
};

export default Example;
