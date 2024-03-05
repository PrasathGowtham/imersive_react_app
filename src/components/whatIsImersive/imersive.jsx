import { Grid, Typography } from "@mui/material";
import React from "react";

export default function WhatIsImersive() {
  const styles = {
    headerGrid: {
      border: "2px solid white",
      fontSize: "6rem",
    },
  };

  return (
    <div className="immersiveContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} sx={styles.headerGrid}>
          <Typography>WHAT IS</Typography>
        </Grid>
        <Grid item xs={12} sx={styles.headerGrid}>
            <img  />
        </Grid>
        <Grid item xs={12} sx={styles.headerGrid}></Grid>
      </Grid>
    </div>
  );
}
