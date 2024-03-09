import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import imgSix from "../../assets/pictures/img_6.jpg";
import webSolIcoon from "../../assets/softwareicons/web_solution.svg";
function BelowFitAr() {
  return (
    <Grid container sx={{ backgroundColor: "white" }}>
      <Grid item md={6}>
        <img src={imgSix} alt="Web based solution" width={"100%"} />
      </Grid>
      <Grid item xs={12} sm={12} md={6} xl={6}>
        <Box
          sx={{
            height: "350px",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                style={{ height: "25px", width: "25px" }}
                src={webSolIcoon}
                alt="Devices"
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "inherit",
                  fontSize: "18px",
                  fontWeight: 700,
                }}
              >
                Device Agnostic
              </Typography>
            </Box>
          </Box>
          <Box sx={{ paddingLeft: { md: "43%", xs: "38%" } }}>
            <Typography
              sx={{
                fontSize: "13px",
                width: { xs: "90%", md: "80%", xl: "90%" },
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              Works on any Device! Our 3D XR store is built to work on any
              device from a smartphone, desktop, to a VR headset!
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BelowFitAr;
