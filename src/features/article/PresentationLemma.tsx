/* eslint-disable react/no-array-index-key */

import React from "react";
import Typography from "@mui/material/Typography";

interface PartsProps {
  lemma: string;
}

const Parts: React.FC<PartsProps> = ({ lemma }) => {
  const parts = lemma.split("@");

  return (
    <>
      {parts.map((part, index) => {
        if (index < parts.length - 1) {
          return (
            <React.Fragment key={index}>
              <Typography component="span" sx={{ fontWeight: "normal" }}>
                {part.slice(0, -1)}
              </Typography>
              <Typography component="span" sx={{ fontWeight: "bolder" }}>
                {part.slice(-1)}
              </Typography>
            </React.Fragment>
          );
        }

        return (
          <Typography
            key={index}
            component="span"
            sx={{ fontWeight: "normal" }}
          >
            {part}
          </Typography>
        );
      })}
    </>
  );
};

interface PresentationLemmaProps {
  presentationLemma: string;
}

const PresentationLemma: React.FC<PresentationLemmaProps> = ({
  presentationLemma,
}) => {
  return <Parts lemma={presentationLemma} />;
};

export default PresentationLemma;
