import React from "react";
import Box from "@mui/material/Box";
import { useLocation, useHistory } from "react-router-dom";
import ArticlesSheet from "../features/article/ArticlesSheet";
import InfiniteStems from "../features/infinitestems/InfiniteStems";
import useStems from "../features/infinitestems/InfiniteStems.hooks";
import setSearchListClickedItem from "../operations/mutations/setSearchListClickedItem";
import { locationParser } from "../utils";
import StatusBar from "./StatusBar";
import { WelcomeHeader } from "./Welcome";

interface SatniMainDesktopProps {
  searchExpression: string;
  currentLemma: string;
}

const SatniMainDesktop: React.FC<SatniMainDesktopProps> = ({
  searchExpression,
  currentLemma,
}) => {
  const location = useLocation();
  const history = useHistory();

  // Get stems for auto-selection
  const { stems } = useStems(searchExpression);

  // Track previous first stem to detect changes
  const prevFirstStemRef = React.useRef<string | null>(null);

  // Auto-select first item in desktop mode when search results appear or change
  React.useEffect(() => {
    // Skip if no search expression or no stems loaded
    if (!searchExpression || stems.length === 0) {
      return;
    }

    const firstStem = stems[0].stem ?? "";
    const firstStemChanged = firstStem !== prevFirstStemRef.current;

    // Auto-navigate to first result when:
    // - First stem in the list has changed (results updated)
    // - OR no lemma is currently selected (initial search)
    if (firstStem && (firstStemChanged || !currentLemma)) {
      const { currentDict } = locationParser(location.pathname);
      const path = currentDict ? `${currentDict}/${firstStem}` : firstStem;

      // Set clicked item to index 0 and navigate to first result
      setSearchListClickedItem(0);
      history.push({
        pathname: `/${path}`,
        search: location.search,
      });

      // Update ref to track this stem
      prevFirstStemRef.current = firstStem;
    }
  }, [
    searchExpression,
    currentLemma,
    stems,
    location.pathname,
    location.search,
    history,
  ]);

  // Show welcome screen if no search and no lemma
  if (!searchExpression && !currentLemma) {
    return (
      <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Box>
          <StatusBar />
        </Box>
        <Box sx={{ px: 2, py: 1 }}>
          <WelcomeHeader />
        </Box>
      </Box>
    );
  }

  // Show two-pane layout with search results and article
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
  );
};

export default SatniMainDesktop;
