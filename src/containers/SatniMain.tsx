import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import qs from "qs";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { locationParser } from "../utils";
import SatniMainDesktop from "./SatniMainDesktop";
import SatniMainMobile from "./SatniMainMobile";

interface SatniMainProps {
  searchExpression: string;
  setSearchExpression: (expression: string) => void;
}

const SatniMain: React.FC<SatniMainProps> = ({
  searchExpression,
  // setSearchExpression is no longer needed here as search is in AppBar
}) => {
  const location = useLocation();
  const locationDict = qs.parse(location.search.slice(1));
  const { currentLemma } = locationParser(location.pathname);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    // @ts-ignore - React Router DOM v5 compatibility
    <Switch>
      {/* @ts-ignore - React Router DOM v5 compatibility */}
      <Redirect from={`/article/${currentLemma}`} to={`/${currentLemma}`} />
      {/* @ts-ignore - React Router DOM v5 compatibility */}
      <Redirect from="/details" to={`/${locationDict.lemma}`} />
      {/* @ts-ignore - React Router DOM v5 compatibility */}
      <Route path="/">
        {isMobile ? (
          <SatniMainMobile
            searchExpression={searchExpression}
            currentLemma={currentLemma}
          />
        ) : (
          <SatniMainDesktop
            searchExpression={searchExpression}
            currentLemma={currentLemma}
          />
        )}
      </Route>
    </Switch>
  );
};

export default SatniMain;
