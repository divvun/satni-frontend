import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import qs from "qs";
import {
  Redirect,
  Route,
  Switch,
  useLocation,
  useHistory,
} from "react-router-dom";
import Articles from "../features/article/Articles";
import ArticlesDialog from "../features/article/ArticlesDialog";
import InfiniteStems from "../features/infinitestems/InfiniteStems";
import FilterBar from "../features/search/FilterBar";
import { locationParser } from "../utils";
import StatusBar from "./StatusBar";
import { WelcomeHeader } from "./Welcome";

interface SatniMainProps {
  searchExpression: string;
  setSearchExpression: (expression: string) => void;
}

const SatniMain: React.FC<SatniMainProps> = ({
  searchExpression,
  setSearchExpression,
}) => {
  const location = useLocation();
  const history = useHistory();
  const locationDict = qs.parse(location.search.slice(1));
  const { currentLemma } = locationParser(location.pathname);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Close dialog: navigate to path without lemma but preserve dict and query
  const handleCloseArticles = () => {
    const { currentDict } = locationParser(location.pathname);
    const basePath = currentDict ? `/${currentDict}` : "/";
    history.push({ pathname: basePath, search: location.search });
  };

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
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Box>
              <StatusBar />
            </Box>
            <Box>
              <FilterBar
                searchExpression={searchExpression}
                setSearchExpression={setSearchExpression}
              />
            </Box>
            {!currentLemma && !searchExpression && (
              <Box sx={{ px: 2, py: 1 }}>
                <WelcomeHeader />
              </Box>
            )}
            <Box sx={{ flex: 1, overflow: "auto" }}>
              <InfiniteStems searchExpression={searchExpression} />
            </Box>
            <ArticlesDialog
              open={Boolean(currentLemma)}
              lemma={currentLemma}
              searchExpression={searchExpression}
              onClose={handleCloseArticles}
            />
          </Box>
        ) : (
          <Grid container>
            <Grid size={12}>
              <StatusBar />
            </Grid>
            <Grid size={12}>
              <FilterBar
                searchExpression={searchExpression}
                setSearchExpression={setSearchExpression}
              />
              {!currentLemma && !searchExpression && <WelcomeHeader />}
            </Grid>
            <Grid size={4}>
              <InfiniteStems searchExpression={searchExpression} />
            </Grid>
            <Grid size={8}>
              {currentLemma && <Articles lemma={currentLemma} />}
            </Grid>
          </Grid>
        )}
      </Route>
    </Switch>
  );
};

export default SatniMain;
