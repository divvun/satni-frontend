import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// @ts-ignore - @lingui/macro has no type definitions
import { Trans } from "@lingui/react/macro";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slide from "@mui/material/Slide";
import type { SlideProps } from "@mui/material/Slide";
import { useLocation, useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import {
  GET_SEARCH_LIST_CLICKED_ITEM,
  type GetSearchListClickedItemQuery,
} from "../../operations/queries/getSearchListClickedItem";
import setSearchListClickedItem from "../../operations/mutations/setSearchListClickedItem";
import useStems from "../infinitestems/InfiniteStems.hooks";
import { locationParser } from "../../utils";

import Articles from "./Articles";

interface ArticlesDialogProps {
  open: boolean;
  lemma: string;
  searchExpression: string;
  onClose: () => void;
}

const ArticlesDialog: React.FC<ArticlesDialogProps> = ({
  open,
  lemma,
  searchExpression,
  onClose,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const history = useHistory();
  const { currentDict } = locationParser(location.pathname);
  const headerTerm =
    searchExpression && searchExpression.trim().length > 0
      ? searchExpression
      : lemma;

  // Get stems and clicked index to enable prev/next navigation
  const { stems } = useStems(searchExpression);
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

  const Transition = React.useMemo(
    () =>
      React.forwardRef(function Transition(
        props: SlideProps & { children: React.ReactElement<any, any> },
        ref: React.Ref<unknown>
      ) {
        return (
          <Slide direction={fullScreen ? "up" : "left"} ref={ref} {...props} />
        );
      }),
    [fullScreen]
  );

  const handleClose = () => {
    // release focus before closing (consistent with other dialogs)
    setTimeout(() => onClose(), 0);
  };

  if (!open) return null;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="ArticlesDialog"
      open={open}
      TransitionComponent={Transition}
      keepMounted
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
      disableRestoreFocus
    >
      <AppBar sx={{ position: "relative" }}>
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
          {stems.length > 0 && computedIndex >= 0 && (
            <Typography
              variant="body2"
              sx={{ mr: 1, minWidth: 48, textAlign: "center" }}
            >
              {computedIndex + 1}/{stems.length}
            </Typography>
          )}
          <Typography variant="h6" sx={{ flex: 1, textAlign: "center" }}>
            <Trans>Results for «{headerTerm}»</Trans>
          </Typography>
          {stems.length > 0 && computedIndex >= 0 && (
            <Typography
              variant="body2"
              sx={{ mr: 1, minWidth: 48, textAlign: "center" }}
            >
              {Math.min(computedIndex + 2, stems.length)}/{stems.length}
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
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ mt: 2, mb: 3, mx: { xs: 1, sm: 8 } }}>
        <DialogContent>
          <Articles lemma={lemma} showHeader={false} />
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ArticlesDialog;
