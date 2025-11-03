import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import GlobalStyles from "@mui/material/GlobalStyles";
import * as Sentry from "@sentry/react";
import React from "react";

import SatniAppBar from "./SatniAppBar";
import SatniDrawer from "./SatniDrawer";
import SatniMain from "./SatniMain";

const drawerWidth = 240;

const AsyncApp: React.FC = () => {
  const [searchExpression, setSearchExpression] = React.useState<string>("");
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: theme.palette.common.white,
          },
        })}
      />
      <CssBaseline />
      <SatniAppBar
        setSearchExpression={setSearchExpression}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <SatniDrawer
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          height: "80vh",
          marginTop: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          marginLeft: { md: `${drawerWidth}px` },
        }}
      >
        <Sentry.ErrorBoundary
          fallback={(errorData) => (
            <>
              <div>You have encountered an error</div>
              <div>
                {errorData.error instanceof Error
                  ? errorData.error.message
                  : String(errorData.error)}
              </div>
              <Button
                color="primary"
                href="/"
                onClick={() => {
                  errorData.resetError();
                }}
              >
                Click here to reset!
              </Button>
            </>
          )}
        >
          <SatniMain
            searchExpression={searchExpression}
            setSearchExpression={setSearchExpression}
          />
        </Sentry.ErrorBoundary>
      </Box>
    </Box>
  );
};

export default AsyncApp;
