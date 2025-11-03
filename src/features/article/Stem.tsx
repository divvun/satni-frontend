import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";

import KorpButton from "../korp/KorpButton";
import ParadigmButton from "../paradigm/ParadigmButton";
import ParadigmDialog from "../paradigm/ParadigmDialog";
import SpeakerButton from "../speaker/SpeakerButton";
import {
  partOfSpeech,
  dialects,
  countryCodes,
} from "../../translateble_variables";

import PresentationLemma from "./PresentationLemma";

interface StemData {
  lemma: string;
  presentationLemma: string;
  pos?: string;
  language: string;
  dialect?: string;
  country?: string;
}

interface RestrictionData {
  restriction?: string;
}

interface StemProps {
  stem: StemData;
  restriction?: RestrictionData | null;
  withLink?: boolean;
}

const Stem: React.FC<StemProps> = ({ stem, restriction, withLink = false }) => {
  const { _ } = useLingui();
  const { lemma, presentationLemma, pos, language, dialect, country } = stem;
  const [openParadigm, setOpenParadigm] = useState(false);

  const handleClickParadigmDialog = () => {
    setOpenParadigm(true);
  };

  const handleCloseParadigmDialog = () => {
    setOpenParadigm(false);
  };

  return (
    <>
      <Typography
        sx={{
          width: "100%",
          borderStyle: "dotted",
          borderWidth: 1,
          borderColor: "transparent",
        }}
      >
        {withLink ? (
          <Link to={`/${lemma}`}>
            <PresentationLemma presentationLemma={presentationLemma} />
          </Link>
        ) : (
          <PresentationLemma presentationLemma={presentationLemma} />
        )}
        {restriction?.restriction && (
          <Typography component="span"> ({restriction.restriction})</Typography>
        )}
        {!lemma.includes(" ") && (
          <>
            <span style={{ float: "right", justifyContent: "space-evenly" }}>
              {pos && (
                <Typography component="span" color="textSecondary">
                  (
                  {partOfSpeech[pos as keyof typeof partOfSpeech]
                    ? _(partOfSpeech[pos as keyof typeof partOfSpeech])
                    : pos}
                  )
                </Typography>
              )}
              {["sme", "sma", "smj"].includes(language) && (
                <SpeakerButton
                  text={` ${lemma},`}
                  language={language}
                  classes={{ icons: "" }}
                />
              )}
              <ParadigmButton
                lemma={lemma}
                pos={pos || ""}
                language={language}
                onClick={handleClickParadigmDialog}
                classes={{ icons: "" }}
              />
              <KorpButton
                lemma={lemma}
                language={language}
                classes={{ icons: "" }}
              />
            </span>
            <ParadigmDialog
              lemma={lemma}
              pos={pos || ""}
              language={language}
              open={openParadigm}
              onClose={handleCloseParadigmDialog}
            />
          </>
        )}
      </Typography>
      {(dialect || country) && (
        <Typography>
          {dialect && (
            <Typography component="span">
              <Trans>Dialect</Trans>:{" "}
              {dialects[dialect as keyof typeof dialects]
                ? _(dialects[dialect as keyof typeof dialects])
                : dialect}{" "}
            </Typography>
          )}
          {country && (
            <Typography component="span">
              <Trans>Country</Trans>:{" "}
              {countryCodes[country as keyof typeof countryCodes]
                ? _(countryCodes[country as keyof typeof countryCodes])
                : country}
            </Typography>
          )}
        </Typography>
      )}
    </>
  );
};

export default Stem;
