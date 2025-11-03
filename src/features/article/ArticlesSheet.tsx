import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from "@lingui/react/macro";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import useStems from "../infinitestems/InfiniteStems.hooks";
import setSearchListClickedItem from "../../operations/mutations/setSearchListClickedItem";
import { locationParser } from "../../utils";
import {
  GET_SEARCH_LIST_CLICKED_ITEM,
  type GetSearchListClickedItemQuery,
} from "../../operations/queries/getSearchListClickedItem";
import Articles from "./Articles";

interface ArticlesSheetProps {
  open: boolean;
  lemma: string;
  searchExpression: string;
  onClose?: () => void;
}

const ArticlesSheet: React.FC<ArticlesSheetProps> = ({
  open,
  lemma,
  searchExpression,
  onClose,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const history = useHistory();
  const { currentDict } = locationParser(location.pathname);
  const headerTerm =
    searchExpression && searchExpression.trim().length > 0
      ? searchExpression
      : lemma;

  // Get stems and clicked index to enable prev/next navigation
  const { stems, totalCount } = useStems(searchExpression);
  const clickedIndexResult = useQuery<GetSearchListClickedItemQuery>(
    GET_SEARCH_LIST_CLICKED_ITEM
  );
  const clickedIndex = clickedIndexResult.data?.searchListClickedItem ?? -1;
  const computedIndex = React.useMemo(() => {
    if (clickedIndex >= 0 && clickedIndex < stems.length) return clickedIndex;
    const i = stems.findIndex((s) => s.stem === lemma);
    return i;
  }, [clickedIndex, stems, lemma]);

  const prevDisabled = computedIndex <= 0 || computedIndex === -1;
  const nextDisabled =
    computedIndex === -1 || computedIndex >= stems.length - 1;

  const navigateToIndex = (index: number) => {
    const nextStem = stems[index]?.stem;
    if (!nextStem) return;
    const pathname = currentDict
      ? `/${currentDict}/${nextStem}`
      : `/${nextStem}`;
    history.push({ pathname, search: location.search });
    setSearchListClickedItem(index);
  };

  // Add keyboard navigation for left/right arrow keys
  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // Only handle arrow keys if not typing in an input field
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (event.key === "ArrowLeft" && !prevDisabled) {
        event.preventDefault();
        navigateToIndex(computedIndex - 1);
      } else if (event.key === "ArrowRight" && !nextDisabled) {
        event.preventDefault();
        navigateToIndex(computedIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, computedIndex, prevDisabled, nextDisabled, stems.length]);

  if (!open) return null;

  // Slide up on mobile, no animation on desktop (just show/hide)
  return (
    <Slide
      direction={isMobile ? "up" : "left"}
      in={open}
      mountOnEnter
      unmountOnExit
    >
      <Box
        sx={{
          position: isMobile ? "fixed" : "relative",
          top: isMobile ? 48 : undefined,
          left: isMobile ? 0 : undefined,
          width: isMobile ? "100vw" : "100%",
          height: isMobile ? "calc(100vh - 96px)" : "100%",
          zIndex: isMobile ? 1200 : "auto",
          bgcolor: "background.paper",
          boxShadow: isMobile ? 6 : 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar position="static" color="default" sx={{ boxShadow: 1 }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="previous"
              onClick={() => navigateToIndex(computedIndex - 1)}
              disabled={prevDisabled}
              sx={{ mr: 1 }}
            >
              <ChevronLeftIcon />
            </IconButton>
            {totalCount && totalCount > 0 && computedIndex >= 0 && (
              <Typography
                variant="body2"
                sx={{ mr: 1, minWidth: 48, textAlign: "center" }}
              >
                {computedIndex + 1}/{totalCount}
              </Typography>
            )}
            <Typography variant="h6" sx={{ flex: 1, textAlign: "center" }}>
              <Trans>Results for «{headerTerm}»</Trans>
            </Typography>
            {totalCount && totalCount > 0 && computedIndex >= 0 && (
              <Typography
                variant="body2"
                sx={{ mr: 1, minWidth: 48, textAlign: "center" }}
              >
                {Math.min(computedIndex + 2, totalCount)}/{totalCount}
              </Typography>
            )}
            <IconButton
              color="inherit"
              aria-label="next"
              onClick={() => navigateToIndex(computedIndex + 1)}
              disabled={nextDisabled}
              sx={{ mr: 1 }}
            >
              <ChevronRightIcon />
            </IconButton>
            {onClose && (
              <IconButton
                edge="end"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
        <Box sx={{ flex: 1, overflow: "auto", p: { xs: 1, sm: 3 } }}>
          <Articles lemma={lemma} showHeader={false} />
        </Box>
      </Box>
    </Slide>
  );
};

export default ArticlesSheet;
