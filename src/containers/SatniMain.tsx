import React from "react";
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
import ArticlesSheet from "../features/article/ArticlesSheet";
import InfiniteStems from "../features/infinitestems/InfiniteStems";
import { locationParser } from "../utils";
import StatusBar from "./StatusBar";
import { WelcomeHeader } from "./Welcome";

interface SatniMainProps {
  searchExpression: string;
  setSearchExpression: (expression: string) => void;
}

const SatniMain: React.FC<SatniMainProps> = ({
  searchExpression,
  // setSearchExpression is no longer needed here as search is in AppBar
}) => {
  const location = useLocation();
  const history = useHistory();
  const locationDict = qs.parse(location.search.slice(1));
  const { currentLemma } = locationParser(location.pathname);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // Track previous search expression to detect changes
  const prevSearchExpressionRef = React.useRef(searchExpression);

  // Close dialog: navigate to path without lemma but preserve dict and query
  const handleCloseArticles = () => {
    const { currentDict } = locationParser(location.pathname);
    const basePath = currentDict ? `/${currentDict}` : "/";
    history.push({ pathname: basePath, search: location.search });
  };

  // On mobile, dismiss ArticlesSheet when user starts typing in search field
  React.useEffect(() => {
    if (
      isMobile &&
      currentLemma &&
      searchExpression !== prevSearchExpressionRef.current
    ) {
      handleCloseArticles();
    }
    prevSearchExpressionRef.current = searchExpression;
  }, [searchExpression, isMobile, currentLemma]);

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
            {!currentLemma && !searchExpression && (
              <Box sx={{ px: 2, py: 1 }}>
                <WelcomeHeader />
              </Box>
            )}
            <Box sx={{ flex: 1 }}>
              <InfiniteStems searchExpression={searchExpression} />
            </Box>
            <ArticlesSheet
              open={Boolean(currentLemma)}
              lemma={currentLemma}
              searchExpression={searchExpression}
              onClose={handleCloseArticles}
            />
          </Box>
        ) : !searchExpression && !currentLemma ? (
          // Desktop start screen - single pane with welcome
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Box>
              <StatusBar />
            </Box>
            <Box sx={{ px: 2, py: 1 }}>
              <WelcomeHeader />
            </Box>
          </Box>
        ) : (
          // Desktop with search or article - two pane layout
          <Box
            sx={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <Box>
              <StatusBar />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  width: "33.33%",
                  minWidth: 0,
                  borderRight: 1,
                  borderColor: "divider",
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ flex: 1, overflow: "auto" }}>
                  <InfiniteStems searchExpression={searchExpression} />
                </Box>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  minWidth: 0,
                  position: "relative",
                  overflow: "auto",
                }}
              >
                {currentLemma && (
                  <ArticlesSheet
                    open={true}
                    lemma={currentLemma}
                    searchExpression={searchExpression}
                  />
                )}
              </Box>
            </Box>
          </Box>
        )}
      </Route>
    </Switch>
  );
};

export default SatniMain;
