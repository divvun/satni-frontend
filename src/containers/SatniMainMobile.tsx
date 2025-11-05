import React from "react";
import Box from "@mui/material/Box";
import { useLocation, useHistory } from "react-router-dom";
import ArticlesSheet from "../features/article/ArticlesSheet";
import InfiniteStems from "../features/infinitestems/InfiniteStems";
import { locationParser } from "../utils";
import StatusBar from "./StatusBar";
import { WelcomeHeader } from "./Welcome";

interface SatniMainMobileProps {
  searchExpression: string;
  currentLemma: string;
}

const SatniMainMobile: React.FC<SatniMainMobileProps> = ({
  searchExpression,
  currentLemma,
}) => {
  const location = useLocation();
  const history = useHistory();

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
    if (currentLemma && searchExpression !== prevSearchExpressionRef.current) {
      handleCloseArticles();
    }
    prevSearchExpressionRef.current = searchExpression;
  }, [searchExpression, currentLemma]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
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
  );
};

export default SatniMainMobile;
