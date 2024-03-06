import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./imersive.css";
import imersive from "../../assets/Container.png";
export default function WhatIsImersive() {
  const styles = {
    headerGrid: {
      fontSize: "8rem",
      color: "white",
      fontWeight: "bold",
    },
    immersiveImage: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  };

  return (
    <div className="immersiveContainer">
      <Grid container spacing={2}>
        <Grid item xs={12} sx={styles.headerGrid}>
          <Typography>WHAT IS</Typography>
        </Grid>
        <Grid item xs={12} sx={styles.immersiveImage}>
          <img src={imersive} alt="imersive" style={styles.immersiveImage} />
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{ textAlign: "center", padding: "0 5rem" }}>
            Imersive.io is a B2B company pioneering experiential e-commerce
            solutions for brands and retailers, empowering them to craft
            captivating 3D commerce experiences seamlessly integrated into
            established platforms and traditional 2D websites.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" variant="outlined">
            LEARN MORE
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
