import React from "react";
// @ts-ignore - @lingui/macro types compatibility
import { Trans } from "@lingui/react/macro";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import { alpha, useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import MoreVert from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
// @ts-ignore - React Router DOM v5 compatibility
import { useHistory, useLocation } from "react-router-dom";

import { locationParser } from "../../utils";
import InputWithTranslation from "./InputWithTranslation";
import SamiKeys from "./SamiKeys";
import WildCard from "./WildCard";

interface FilterBarProps {
  searchExpression: string;
  setSearchExpression: (expression: string) => void;
  /** When true, renders with compact styles suitable for the AppBar */
  inAppBar?: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({
  searchExpression,
  setSearchExpression,
  inAppBar = false,
}) => {
  const theme = useTheme();
  const history = useHistory();
  const location = useLocation();
  const currentPath = locationParser(location.pathname);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchExpression(event.target.value);
  };

  const handleKeyInput = (input: string) => {
    setSearchExpression(`${searchExpression}${input}`);
  };

  const lookup = () => {
    const path = currentPath.currentDict
      ? `/${currentPath.currentDict}/${searchExpression}`
      : `/${searchExpression}`;
    history.push(path);
  };

  const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      lookup();
    }
  };

  const [samiKeyAnchor, setSamiKeyAnchor] = React.useState<HTMLElement | null>(
    null
  );

  const handleOpenSamiKey = (event: React.MouseEvent<HTMLElement>) => {
    setSamiKeyAnchor(event.currentTarget);
  };

  const handleCloseSamiKey = () => {
    setSamiKeyAnchor(null);
  };

  const samiKeyOpen = Boolean(samiKeyAnchor);
  const idSamiKey = samiKeyOpen ? "sami-keys" : undefined;

  const [searchModeAnchor, setSearchModeAnchor] =
    React.useState<HTMLElement | null>(null);

  const handleOpenSearchMode = (event: React.MouseEvent<HTMLElement>) => {
    setSearchModeAnchor(event.currentTarget);
  };

  const handleCloseSearchMode = () => {
    setSearchModeAnchor(null);
  };

  const searchModeOpen = Boolean(searchModeAnchor);
  const idSearchMode = searchModeOpen ? "search-mode" : undefined;

  return (
    <Paper
      component="div"
      sx={{
        m: inAppBar ? 0 : 2,
        px: inAppBar ? 1 : 0,
        color: inAppBar
          ? theme.palette.common.white
          : theme.palette.common.black,
        display: "flex",
        alignItems: "center",
        flexGrow: 1,
        backgroundColor: inAppBar
          ? alpha(theme.palette.common.white, 0.15)
          : alpha(theme.palette.common.black, 0.15),
      }}
    >
      <Tooltip title={<Trans>Sámi letters</Trans>}>
        <IconButton
          sx={{ color: "inherit", p: 1 }}
          aria-describedby={idSamiKey}
          onClick={handleOpenSamiKey}
        >
          <KeyboardIcon />
        </IconButton>
      </Tooltip>
      <InputWithTranslation
        value={searchExpression}
        onChange={handleChange}
        onKeyUp={keyPress}
      />
      <Tooltip title={<Trans>Lookup the search word</Trans>}>
        <IconButton sx={{ color: "inherit", p: 1 }} onClick={lookup}>
          <SearchIcon />
        </IconButton>
      </Tooltip>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Tooltip
          title={
            <Trans>
              Choose whether the search expression is in the start, middle or
              the end of words.
            </Trans>
          }
        >
          <IconButton
            sx={{ color: "inherit", p: 1 }}
            aria-label="Search mode"
            onClick={handleOpenSearchMode}
          >
            <MoreVert />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <WildCard />
      </Box>
      <Popover
        sx={{ maxWidth: "600px" }}
        id={idSamiKey}
        open={samiKeyOpen}
        anchorEl={samiKeyAnchor}
        onClose={handleCloseSamiKey}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <SamiKeys keyHandler={handleKeyInput} />
      </Popover>
      <Popover
        sx={{ m: 1, width: "100%" }}
        id={idSearchMode}
        open={searchModeOpen}
        anchorEl={searchModeAnchor}
        onClose={handleCloseSearchMode}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <WildCard />
      </Popover>
    </Paper>
  );
};

export default FilterBar;
