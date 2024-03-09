import { Grid, Typography } from "@mui/material";
import React, { Suspense, useRef } from "react";

function ThreeDserviceText() {
  return (
    <>
      <div style={{ backgroundColor: "#fff",padding:"3rem" }}>
        <Grid container >
          <Grid xs={12}>
            <Typography sx={{ fontSize: {md:"7rem",xs:"3rem"}, fontWeight: "600" ,fontColor:"#fff"}}>
              3D SERVICES
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ThreeDserviceText;
