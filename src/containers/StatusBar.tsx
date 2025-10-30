import { useQuery } from "@apollo/client";
import { makeStyles } from "@mui/styles";
import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import { Link, useLocation } from "react-router-dom";
import Typography from "@mui/material/Typography";
import type { MessageDescriptor } from "@lingui/core";

import { availableLanguages, locationParser } from "../utils";
import dictionaryInfo, { dictionaryNames } from "../translateble_variables";
import GET_LANGS_DICTS from "../operations/queries/getLangsDicts";

const useStyles = makeStyles((theme: any) => ({
  status: {
    textAlign: "center",
    margin: theme.spacing(1),
  },
}));

const dictStatus = (
  wantedDicts: string[],
  currentLemma: string,
  _: (descriptor: MessageDescriptor) => string
) => {
  if (wantedDicts.length === 1) {
    return (
      <>
        <Trans>Results only from</Trans>{" "}
        {dictionaryNames[wantedDicts[0] as keyof typeof dictionaryNames]
          ? _(dictionaryNames[wantedDicts[0] as keyof typeof dictionaryNames])
          : wantedDicts[0]}{" "}
        <Trans>
          (<Link to={`/${currentLemma}`}>Show all</Link>)
        </Trans>
      </>
    );
  }

  return (
    <Trans>
      {wantedDicts.length}/{Object.keys(dictionaryInfo).length} sources.
    </Trans>
  );
};

const langStatus = (wantedDicts: string[], srcLangs: string[]) => {
  if (wantedDicts.length > 1 || wantedDicts.includes("termwiki")) {
    return (
      <Trans>
        {srcLangs.length}/{availableLanguages.length} languages.
      </Trans>
    );
  }

  return null;
};

const StatusBar: React.FC = () => {
  const classes = useStyles();
  const { _ } = useLingui();
  const location = useLocation();
  const { currentDict, currentLemma } = locationParser(location.pathname);
  const langsDictsQueryResult = useQuery(GET_LANGS_DICTS);
  const { srcLangs } = langsDictsQueryResult.data;

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  return (
    <Typography className={classes.status}>
      {langStatus(wantedDicts, srcLangs)}{" "}
      {dictStatus(wantedDicts, currentLemma, _)}
    </Typography>
  );
};

export default StatusBar;
