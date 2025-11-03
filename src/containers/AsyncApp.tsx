import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Theme } from "@mui/material/styles";
import { withStyles, WithStyles } from "@mui/styles";
import * as Sentry from "@sentry/react";
import React from "react";

import SatniAppBar from "./SatniAppBar";
import SatniDrawer from "./SatniDrawer";
import SatniMain from "./SatniMain";

const drawerWidth = 240;

const styles = (theme: Theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white, // Note: grey might not exist, using white
    },
  },
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column" as const,
  },
  main: {
    display: "flex",
    flexDirection: "column" as const,
    flex: 1,
    height: "80vh",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    marginTop: theme.spacing(1),
  },
});

interface AsyncAppProps extends WithStyles<typeof styles> {}

const AsyncApp: React.FC<AsyncAppProps> = ({ classes }) => {
  const [searchExpression, setSearchExpression] = React.useState<string>("");
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className={classes.container}>
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
      <main className={classes.main}>
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
      </main>
    </div>
  );
};

export default withStyles(styles)(AsyncApp);
