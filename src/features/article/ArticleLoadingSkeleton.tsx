import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const ArticleLoadingSkeleton: React.FC = () => {
  return (
    <Paper
      sx={{
        p: 2,
        mb: 1,
        "@keyframes throb": {
          "0%, 100%": { opacity: 0.3 },
          "50%": { opacity: 1 },
        },
        animation: "throb 1.5s ease-in-out infinite",
      }}
      elevation={1}
    >
      <Grid container spacing={1}>
        <Grid size={12}>
          {/* Source divider */}
          <Divider />
        </Grid>
        <Grid size={12}>
          {/* Stem placeholder */}
          <Box
            sx={{
              height: 32,
              bgcolor: "action.hover",
              borderRadius: 1,
              mb: 1,
            }}
          />
        </Grid>
        <Grid size={12} sx={{ ml: 2 }}>
          {/* Translation placeholder */}
          <Box
            sx={{
              height: 32,
              bgcolor: "action.hover",
              borderRadius: 1,
              mb: 1,
            }}
          />
          {/* Examples placeholder */}
          <Box
            sx={{
              height: 24,
              bgcolor: "action.hover",
              borderRadius: 1,
              width: "80%",
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ArticleLoadingSkeleton;
