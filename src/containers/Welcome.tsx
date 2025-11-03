import { useLocation } from "react-router-dom";

import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import InfoOutlined from "@mui/icons-material/InfoOutlined";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "@mui/material/Link";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ViewHeadlineOutlined from "@mui/icons-material/ViewHeadlineOutlined";

import dictionaryInfo, { dictionaryNames } from "../translateble_variables";
import { locationParser } from "../utils";

export const WelcomeHeader: React.FC = () => {
  const { _ } = useLingui();
  const { currentLemma, currentDict } = locationParser(useLocation().pathname);
  return (
    <Paper
      sx={{
        mx: { xs: 4, sm: "20%" },
        mt: 4,
        p: 2,
      }}
    >
      <Typography variant="h5" sx={{ textAlign: "center", m: 1 }}>
        {currentDict && !currentLemma ? (
          dictionaryNames[currentDict as keyof typeof dictionaryNames] ? (
            _(dictionaryNames[currentDict as keyof typeof dictionaryNames])
          ) : (
            currentDict
          )
        ) : (
          <Trans>Welcome!</Trans>
        )}
      </Typography>
      <Typography component="p" sx={{ mb: 1 }}>
        {currentDict && !currentLemma ? (
          <>
            {dictionaryInfo[
              currentDict as keyof typeof dictionaryInfo
            ].info.map((infoText, index) => (
              <Typography key={`${currentDict}-info-${index}`} component="span">
                {_(infoText)}
              </Typography>
            ))}
          </>
        ) : (
          <Trans>
            Do searches in{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://giella.org"
            >
              Giellagáldu&apos;s
            </Link>{" "}
            term collection,{" "}
            <Link href="/sammallahtismefin">
              Pekka Sammallahti&apos;s North Sami – Finnish dictionary
            </Link>
            {", "}Hábmer municipality&apos;s{" "}
            <Link href="/habmersmjnob">Lule Sámi - Norwegian</Link> or{" "}
            <Link href="/habmernobsmj">Norwegian - Lule Sámi</Link> medicinal
            dictionaries and{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="http://giellatekno.uit.no"
            >
              Giellatekno&apos;s
            </Link>{" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="http://sanit.oahpa.no"
            >
              sami dictionaries
            </Link>
            .
          </Trans>
        )}
      </Typography>
    </Paper>
  );
};

export const SearchWelcome: React.FC = () => {
  return (
    <div
      style={{
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: 32,
        padding: 16,
      }}
    >
      <Typography component="p" sx={{ mb: 1 }}>
        <Trans>Search results will appear here.</Trans>
      </Typography>
      <Typography component="p" sx={{ mb: 1 }}>
        <Trans>
          The input field accepts sami, nordic, english and latin search words.
          If you do not have Sami letters on your device, press{" "}
          <KeyboardIcon sx={{ fontSize: "inherit" }} /> to write them in the
          input field.
        </Trans>
      </Typography>
      <Typography component="p" sx={{ mb: 1 }}>
        <Trans>
          You can browse the search words here, new ones will be fetched until
          all matches have been found.
        </Trans>
      </Typography>
      <Typography component="p" sx={{ mb: 1 }}>
        <Trans>
          When you click a word here, dictionary articles appear to the right.
        </Trans>
      </Typography>
    </div>
  );
};

export const DictWelcome: React.FC = () => {
  return (
    <div
      style={{
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: 32,
        padding: 16,
      }}
    >
      <Typography component="p" sx={{ mb: 1 }}>
        <Trans>
          Dictionary articles will appear in this pane when you press a word in
          the search results to the left.
        </Trans>
      </Typography>
      <Typography component="p" sx={{ mb: 1 }}>
        <Trans>
          Click <InfoOutlined sx={{ fontSize: "inherit" }} /> to see the
          inflection paradigm of words. Click{" "}
          <ViewHeadlineOutlined sx={{ fontSize: "inherit" }} /> to see examples
          of how the word is used.
        </Trans>
      </Typography>
      <Typography component="p" sx={{ mb: 1 }}>
        <Trans>
          Inside the articles you can hide unwanted languages and dictionaries.
          To reactivate them, press{" "}
          <LanguageIcon sx={{ fontSize: "inherit" }} /> or{" "}
          <MenuBookIcon sx={{ fontSize: "inherit" }} /> .
        </Trans>
      </Typography>
    </div>
  );
};
